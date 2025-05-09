"use server";

export async function signup(formData) {
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
}
