'use server'
import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

export async  function updatePassword (formData : FormData) {
const supabase = await createClient()

const newPassword = formData.get ('newpassword') as string
const confirmNewPassword = formData.get ('confirmpassword') as string

if (newPassword !== confirmNewPassword) {
    throw new Error ('passwords do not match')
 } const {error} = await supabase.auth.updateUser ({
    password: newPassword,

 }) 
 if (error) {throw error}

 redirect('/login')
}