from django.db import models

class Flight(models.Model):
    flight_number = models.CharField(max_length=10)
    operating_airlines = models.CharField(max_length=50)
    departure_city = models.CharField(max_length=50)
    arrival_city = models.CharField(max_length=50)
    datetime_of_departure = models.DateTimeField()
    arrival_datetime = models.DateTimeField()

    def __str__(self):
        return f"{self.flight_number} - {self.operating_airlines}"
    
class Passenger(models.Model):
    first_name = models.CharField(max_length=50)
    middle_name = models.CharField(max_length=50, blank=True, null=True)
    last_name = models.CharField(max_length=50)
    email = models.EmailField()
    phone = models.CharField(max_length=15)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class Reservation(models.Model):
    flight = models.OneToOneField(Flight, on_delete=models.CASCADE)
    passenger = models.OneToOneField(Passenger, on_delete=models.CASCADE)

    def __str__(self):
        return f"Reservation for {self.passenger} on {self.flight}"
