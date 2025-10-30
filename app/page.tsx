"use client";
import { createPost } from "@/libs/actions";
import Image from "next/image";
import { useActionState } from "react";

export default function Home() {
  const initialState = { message: "" };
  const [state, formAction, pending] = useActionState(createPost, initialState);

  return (
    <main>
      {/* <h1>Image optimization</h1>
      <Image
        src="https://images.unsplash.com/photo-1760710464165-6bd943b8fa44?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
        width={600}
        height={600}
        blurDataURL="/blur.avif"
        placeholder="blur"
        alt="image"
      /> */}

      <div className="container mx-auto max-w-xl">
        <h1 className="text-xl font-black">Create Post</h1>

        <form action={formAction}>
          <label htmlFor="title">Title</label> <br />
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            type="text"
            id="title"
            name="title"
            required
          />{" "}
          <br />
          <label htmlFor="description">Content</label> <br />
          <textarea
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            id="description"
            name="description"
            required
          />{" "}
          <br />
          {state.message && <p>{state.message}</p>}
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto disabled:opacity-50 px-5 py-2.5 text-center "
            type="submit"
            disabled={pending}
          >
            Create Post
          </button>
        </form>
      </div>
    </main>
  );
}
