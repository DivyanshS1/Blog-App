import React from "react";
import PostList from "../components/PostList";
import CreatePost from "../components/CreatePost";

function Home() {
  return (
    <div className="page-container py-8">
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white/90 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-teal-700 bg-teal-50 dark:bg-teal-900/30 px-3 py-1 rounded-full">Personal publishing dashboard</span>

          <h1 className="mt-6 text-4xl lg:text-5xl font-serif font-medium text-slate-900 dark:text-slate-100 leading-tight">Shape ideas into elegant posts.</h1>

          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 max-w-2xl">Draft thoughtful stories, refine them quickly, and manage your personal collection of posts in a calmer, more editorial interface.</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="text-sm text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-full">Focused writing flow</span>
            <span className="text-sm text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-full">Secure personal feed</span>
            <span className="text-sm text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-full">Clean post management</span>
          </div>
        </div>

        <div className="rounded-2xl p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white shadow-md">
          <p className="text-xs font-bold uppercase tracking-widest text-teal-200">Studio Notes</p>

          <div className="mt-6 space-y-6">
            <div>
              <p className="text-3xl font-extrabold">Write</p>
              <p className="mt-2 text-sm text-slate-200">Create polished entries with a cleaner, more readable composer.</p>
            </div>

            <div>
              <p className="text-3xl font-extrabold">Review</p>
              <p className="mt-2 text-sm text-slate-200">Scan all of your posts in a card layout that feels more intentional.</p>
            </div>

            <div>
              <p className="text-3xl font-extrabold">Refine</p>
              <p className="mt-2 text-sm text-slate-200">Edit or remove posts while keeping the interface light and professional.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <CreatePost />
        <PostList />
      </div>
    </div>
  );
}

export default Home;
