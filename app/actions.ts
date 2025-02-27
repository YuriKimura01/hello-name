"use server"

// Server action to process the greeting
export async function greetUser(prevState: any, name: string) {
  // Simulate a delay to show loading state
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Validate input
  if (!name || name.trim() === "") {
    return { message: "Please enter your name" }
  }

  // Return greeting message
  return { message: `Hello ${name}!` }
}

