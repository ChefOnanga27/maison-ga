"use client";
import React from "react"
import { useState } from "react";
import { Navigation } from "@/app/components/navigation";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/app/components/ui/card";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(isLogin ? "Login" : "Register", { email, password });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
      <Navigation />
      <main className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <Card>
          <CardHeader>
            <CardTitle className="text-blue-600">{isLogin ? "Connexion" : "Inscription"}</CardTitle>
            <CardDescription className="text-gray-500">{isLogin ? "Connectez-vous à votre compte" : "Créez un nouveau compte"}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <Label htmlFor="password">Mot de passe</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => setIsLogin(!isLogin)} className="text-blue-600 border-blue-600">
              {isLogin ? "S'inscrire" : "Se connecter"}
            </Button>
            <Button onClick={handleSubmit} className="bg-blue-600 text-white">
              {isLogin ? "Connexion" : "Inscription"}
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
