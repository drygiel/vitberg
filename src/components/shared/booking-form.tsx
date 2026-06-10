'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import './booking-form.scss';

type BookingFormProps = {
  className?: string;
  id?: string;
};

export function BookingForm({ className, id }: BookingFormProps) {
  return (
    <Card id={id} className={cn('booking-form', className)}>
      <CardHeader className="booking-form__header">
        <CardTitle className="booking-form__title">Zamów bezpłatną konsultację</CardTitle>
        <CardDescription className="booking-form__description">
          Wpisz swoje dane. Oddzwonimy w ciągu 24 godzin, aby ustalić najwygodniejszy dla Ciebie
          termin bezpłatnej wizyty.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          className="booking-form__form"
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <div className="booking-form__fields">
            <div className="booking-form__field">
              <Label htmlFor="name" className="booking-form__label">
                Imię i nazwisko
              </Label>
              <Input
                id="name"
                name="name"
                required
                placeholder="Jan Kowalski"
                className="booking-form__input"
              />
            </div>
            <div className="booking-form__field">
              <Label htmlFor="phone" className="booking-form__label">
                Numer telefonu
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="500 000 000"
                className="booking-form__input"
              />
            </div>
          </div>
          <Button type="submit" className="booking-form__submit">
            Zamów bezpłatną konsultację
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
