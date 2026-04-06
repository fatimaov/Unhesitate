"use server";

import { auth, currentUser } from "@clerk/nextjs/server";
import { connect } from "@/lib/mongodb";
import Dream from "@/lib/models/dream.model";
import { localDb } from "@/lib/local-db";

export async function createDream(input: {
  title: string;
  description: string;
  type: "dream" | "nightmare";
  location?: string;
  imageUrl?: string;
}) {
  try {
    // Try to get user from currentUser first
    let user = await currentUser();
    
    // If currentUser fails, fallback to auth()
    if (!user) {
      const { userId } = await auth();
      if (!userId) throw new Error("Unauthorized - User not authenticated");
    }

    // Get fresh user data
    user = await currentUser();
    if (!user) {
      throw new Error("Unauthorized - Cannot retrieve user information");
    }

    const { isFallback } = await connect();

    const dreamData = {
      clerkUserId: user.id,
      username:
        user.username ||
        (user.firstName && user.lastName 
          ? `${user.firstName} ${user.lastName}` 
          : user.primaryEmailAddress?.emailAddress) ||
        "Unknown User",
      userImage: user.imageUrl || "",
      ...input,
    };

    if (isFallback) {
      const dream = await localDb.create(dreamData);
      return JSON.parse(JSON.stringify(dream));
    }

    const dream = await Dream.create(dreamData);
    return JSON.parse(JSON.stringify(dream));
  } catch (error) {
    console.error("Error creating dream:", error);
    throw error;
  }
}

export async function getMyDreams() {
  const { isFallback } = await connect();

  if (isFallback) {
    const dreams = await localDb.find({ type: "dream" });
    return JSON.parse(JSON.stringify(dreams));
  }

  return await Dream.find({ type: "dream" })
    .sort({ createdAt: -1 })
    .lean();
}

export async function getNightmares() {
  const { isFallback } = await connect();

  if (isFallback) {
    const dreams = await localDb.find({ type: "nightmare" });
    return JSON.parse(JSON.stringify(dreams));
  }

  return await Dream.find({ type: "nightmare" })
    .sort({ createdAt: -1 }).lean()
}

export async function deleteDream(id: string) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const { isFallback } = await connect();

  if (isFallback) {
    await localDb.deleteOne({ _id: id, clerkUserId: userId });
    return;
  }

  await Dream.deleteOne({ _id: id, clerkUserId: userId });
}
