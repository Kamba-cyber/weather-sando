class WeatherData:
    def __init__(self, description, temperature, humidity):
        self.description = description
        self.temperature = temperature
        self.humidity = humidity

    def __str__(self):
        return f"Weather:{self.description}, {self.temperature}, {self.humidity}"