import fs from 'fs';
import path from 'path';

const DB_FILE = path.join(process.cwd(), 'local-db.json');

interface DreamData {
  _id: string;
  clerkUserId: string;
  username: string;
  userImage: string;
  title: string;
  description: string;
  imageUrl?: string;
  type: 'dream' | 'nightmare';
  location?: string;
  createdAt: string;
  updatedAt: string;
}

const ensureDbExists = () => {
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify([], null, 2));
  }
};

export const localDb = {
  async getAll() {
    ensureDbExists();
    const data = fs.readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(data) as DreamData[];
  },

  async find(query: Partial<DreamData>) {
    const all = await this.getAll();
    return all.filter(item => {
      return Object.entries(query).every(([key, value]) => {
        return (item as any)[key] === value;
      });
    }).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  },

  async create(data: Omit<DreamData, '_id' | 'createdAt' | 'updatedAt'>) {
    ensureDbExists();
    const all = await this.getAll();
    const newItem: DreamData = {
      ...data,
      _id: Math.random().toString(36).substring(2, 15),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    all.push(newItem);
    fs.writeFileSync(DB_FILE, JSON.stringify(all, null, 2));
    return newItem;
  },

  async deleteOne(query: { _id: string; clerkUserId: string }) {
    ensureDbExists();
    const all = await this.getAll();
    const filtered = all.filter(item => !(item._id === query._id && item.clerkUserId === query.clerkUserId));
    fs.writeFileSync(DB_FILE, JSON.stringify(filtered, null, 2));
  }
};
