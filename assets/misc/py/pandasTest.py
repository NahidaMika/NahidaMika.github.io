import pandas as pd

# Define the survey data
survey_data = [
    ("windy", 50),
    ("sunny", 120),
    ("sunny", 148),
    ("cloudy", 42),
    ("rainy", 0),
    ("rainy", 25),
    ("windy", 43),
    ("sunny", 114),
    ("cloudy", 54),
    ("rainy", 34),
    ("windy", 61),
    ("cloudy", 69),
    ("cloudy", 59),
    ("cloudy", 71),
    ("rainy", 32),
    ("windy", 54),
    ("sunny", 109),
    ("windy", 74),
    ("rainy", 42),
    ("cloudy", 72),
    ("sunny", 87),
    ("windy", 122),
    ("cloudy", 83),
    ("sunny", 86),
    ("rainy", 69),
    ("windy", 43),
    ("cloudy", 0),
    ("cloudy", 98),
    ("sunny", 56),
    ("rainy", 86)
]

# Create a pandas DataFrame
df = pd.DataFrame(survey_data, columns=["Weather", "Kilometres Travelled"])

# Group by Weather and create a list of Kilometres Travelled
df_grouped = df.groupby("Weather")["Kilometres Travelled"].apply(list).reset_index()

# Rename the column
df_grouped.columns = ["Weather", "Kilometres Travelled"]

# Print the double entry table
print(df_grouped)