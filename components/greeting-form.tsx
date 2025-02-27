"use client"

import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { greetUser } from "@/app/actions"
import { useState } from "react"

// Initial state for the form
const initialState = {
  message: "",
}

export function GreetingForm() {
  const [name, setName] = useState("")
  const [state, formAction, pending] = useActionState(greetUser, initialState)

  // Handle form submission with the bound action
  const handleSubmit = formAction.bind(null, name)

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Enter Your Name</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <form action={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <Button type="submit" className="w-full" disabled={pending}>
            {pending ? "Submitting..." : "Greet Me!"}
          </Button>
        </form>

        {state.message && (
          <div className="p-4 mt-4 bg-primary/10 rounded-md text-center">
            <p className="text-xl font-medium">{state.message}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

