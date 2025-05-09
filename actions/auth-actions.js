"use server";

import { createUser } from "@/lib/user";

export async function signup(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  //store in the  db (create a new user)
  let errors = {};
  if (!email.includes("@")) {
    errors.email = "Please enter a valid email address";
  }

  if (password.trim().length < 8) {
    errors.password = "Password must be at least 8 characters long.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors,
    };
  }
  //store in the  db (create a new user)
  // never but NEVER save the passwords in plain text
  createUser(email, password);
}
