import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/"); // redirect to homepage
  };

  return (
    <div className="p-10 max-w-md min-h-screen mx-auto flex flex-col justify-center">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Login</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white w-full"
        >
          Login
        </Button>
      </form>
    </div>
  );
}
