"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type BookingFormProps = {
  className?: string;
  id?: string;
};

export function BookingForm({ className, id }: BookingFormProps) {
  return (
    <Card
      id={id}
      className={`border-2 border-primary shadow-xl ${className ?? ""}`}
    >
      <CardHeader className="text-center">
        <CardTitle className="font-heading text-xl font-bold tracking-wide text-primary uppercase md:text-2xl">
          Zamów bezpłatną konsultację
        </CardTitle>
        <CardDescription className="text-base text-foreground">
          Wpisz swoje dane. Oddzwonimy w ciągu 24 godzin, aby ustalić najwygodniejszy
          dla Ciebie termin bezpłatnej wizyty.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-base font-semibold">
                Imię i nazwisko
              </Label>
              <Input
                id="name"
                name="name"
                required
                placeholder="Jan Kowalski"
                className="h-12 text-base"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-base font-semibold">
                Numer telefonu
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="500 000 000"
                className="h-12 text-base"
              />
            </div>
          </div>
          <Button
            type="submit"
            className="h-12 w-full rounded-full text-base font-bold tracking-wide uppercase"
          >
            Zamów bezpłatną konsultację
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
