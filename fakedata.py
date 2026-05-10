from faker import Faker
from random import randint, choice
import csv

fake = Faker()


genres = [
    "Action", "Action/Adventure", "Comedy", "Animation", "Sci-Fi", "Horror"
]

file = open("movies.csv", "w", newline="", encoding="utf-8")
columns = ["Title", "Genre", "Rating", "Year", "Duration", "Description"]
writer = csv.DictWriter(file, columns)
writer.writeheader()

for i in range(25):
    title = fake.catch_phrase()
    genre = choice(genres)
    rating = randint(1, 5)
    year = randint(2000, 2026)
    duration = randint(80, 120)
    description = fake.sentence(nb_words=5)

    row = {
        "Title": title,
        "Genre": genre,
        "Rating": rating,
        "Year": year,
        "Duration": duration,
        "Description": description
    }

    writer.writerow(row)