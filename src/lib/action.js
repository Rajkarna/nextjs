"use server"

import { revalidatePath } from "next/cache"
import { Post } from "./models"
import { connectToDb } from "./utils"
import { signIn, signOut } from "./auth"

export const addPost = async (formData) => {

    try {
        const { title, desc, userId, slug } = Object.fromEntries(formData)
        await connectToDb()

        const post = new Post({
            title,
            desc,
            userId,
            slug
        })

        await post.save()
        revalidatePath("/blog");

        console.log("post added successfully");
    }
    catch (err) {
        console.log("post not added", err);

    }

}

export const deletePost = async (formData) => {

    try {
        const { id } = Object.fromEntries(formData)
        await connectToDb()

        const post = Post.findByIdAndDelete(id)
        revalidatePath("/blog");
        
        console.log("post del successfully");
    }
    catch (err) {
        console.log("post not deleted", err);

    }

}

export const handleGithubLogin = async () => {
 
    await signIn("github");
  };
  
  export const handleLogout = async () => {
  
    await signOut();
  };