"use client";
import DreamForm from '@/components/DreamForm'
import FormCard from '@/components/FormCard'
import React from 'react'

const Create = () => {
  return (
    <div className="flex min-h-screen items-center justify-center gap-4 sm:gap-6 lg:gap-10 bg-black px-4 sm:px-6 py-6 sm:py-10 flex-col lg:flex-row lg:items-start overflow-hidden w-full max-w-[100vw]">
      <DreamForm />

      <div className="hidden xl:block relative z-10 max-w-[90vw] flex-shrink-0">
        <FormCard />
      </div>
    </div>

  )
}

export default Create