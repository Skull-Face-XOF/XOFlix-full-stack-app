import csv
import json
from random import randint

movies = []

with open("movies.csv", "r", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for row in reader:

        movie = {
            "title": row["Title"],
            "genre": row["Genre"],
            "rating": int(row["Rating"]),
            "year": int(row["Year"]),
            "duration_minutes": int(row["Duration"]),
            "description": row["Description"],

            # ⭐ ML FEATURES ADDED HERE
            "action_level": randint(0, 100),
            "complexity": randint(0, 100)
        }

        movies.append(movie)

with open("movies.json", "w", encoding="utf-8") as f:
    json.dump(movies, f, indent=4)

print("movies.json created!")