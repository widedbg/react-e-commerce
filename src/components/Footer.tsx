import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-muted text-foreground mt-10">
      <Card className="rounded-none shadow-none bg-muted border-t border-border">
        <CardContent className="flex flex-col md:flex-row justify-between items-center p-6">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h4 className="text-lg font-bold">My E-Commerce App</h4>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex gap-4">
            <Button variant="ghost" size="sm">About</Button>
            <Button variant="ghost" size="sm">Contact</Button>
            <Button variant="ghost" size="sm">Privacy Policy</Button>
          </div>
        </CardContent>
      </Card>
      <Separator />
      <p className="text-center text-sm text-muted-foreground p-2">
        Built with ❤️ using React + Shadcn UI + Tailwind CSS
      </p>
    </footer>
  );
}

export default Footer;
