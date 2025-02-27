import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ExplanationSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>How It Works</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="server-actions">
            <AccordionTrigger>Server Actions</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                Server Actions are asynchronous functions that execute on the
                server. In this app, the{" "}
                <code className="bg-muted px-1 rounded">greetUser</code>{" "}
                function is a server action that processes the name input and
                returns a greeting message. Server Actions are defined with the{" "}
                <code className="bg-muted px-1 rounded">
                  &apos;use server&apos;
                </code>{" "}
                directive and can be called directly from client components.
                [^1]
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="shadcn-ui">
            <AccordionTrigger>Shadcn UI Components</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                This app uses several Shadcn UI components:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
                <li>
                  <code className="bg-muted px-1 rounded">Card</code> - For
                  containing the form and explanation sections
                </li>
                <li>
                  <code className="bg-muted px-1 rounded">Input</code> - For the
                  name input field
                </li>
                <li>
                  <code className="bg-muted px-1 rounded">Button</code> - For
                  the submit button
                </li>
                <li>
                  <code className="bg-muted px-1 rounded">Accordion</code> - For
                  the collapsible explanation sections
                </li>
              </ul>
              <p className="mt-2 text-muted-foreground">
                Shadcn UI provides accessible, customizable components built on
                Radix UI and styled with Tailwind CSS.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="nextjs-features">
            <AccordionTrigger>Next.js 15.1 Features</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                This app demonstrates several key Next.js 15.1 features:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
                <li>
                  <strong>React 19 Support</strong> - Using the new{" "}
                  <code className="bg-muted px-1 rounded">useActionState</code>{" "}
                  hook for form state management
                </li>
                <li>
                  <strong>Server Actions</strong> - Processing form data on the
                  server without creating API routes
                </li>
                <li>
                  <strong>App Router</strong> - Using the file-based routing
                  system with server and client components
                </li>
                <li>
                  <strong>Enhanced Forms</strong> - Leveraging React 19&apos;s
                  improved form handling capabilities
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="implementation">
            <AccordionTrigger>Implementation Details</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">The app consists of:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
                <li>
                  A client component (
                  <code className="bg-muted px-1 rounded">GreetingForm</code>)
                  that handles user input
                </li>
                <li>
                  A server action (
                  <code className="bg-muted px-1 rounded">greetUser</code>) that
                  processes the input
                </li>
                <li>
                  The{" "}
                  <code className="bg-muted px-1 rounded">useActionState</code>{" "}
                  hook that manages the form state and provides the pending
                  status
                </li>
                <li>
                  Responsive design using Tailwind CSS for optimal display on
                  all devices
                </li>
              </ul>
              <p className="mt-2 text-muted-foreground">
                When the form is submitted, the server action is called, and the
                response is used to update the UI without a full page refresh.
                [^2]
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
