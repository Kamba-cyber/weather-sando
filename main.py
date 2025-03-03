from get_weather_data import get_weather_data


def main():
    input("Lusaka: ")
    weather_data = get_weather_data()

    if weather_data:
        print('Weather is:', weather_data['weather'][0]['description'])
    else:
        print('Failed to retrieve weather data.')

if __name__ == "__main__":
    main()
