import openpyxl
import time
import pandas as pd
from openpyxl import Workbook
from openpyxl.utils.dataframe import dataframe_to_rows
from openpyxl import load_workbook

import pandas as pd
from datetime import datetime

from flask import Flask, request, send_file
from io import BytesIO

app = Flask(__name__)

# Create a new workbook
wb = Workbook()
ws = wb.active

# Set up the header row
ws['A1'] = 'Date'
ws['B1'] = 'Entry Hour'
ws['C1'] = 'Departure Time'
ws['D1'] = 'Total Hours per Day'
ws['E1'] = 'Total Hours'

# Function to calculate total hours
def calculate_total_hours(entry_hour, departure_time):
    # Assuming entry_hour and departure_time are in 24-hour format (HH:MM)
    entry_hour = int(entry_hour.split(':')[0])
    departure_time = int(departure_time.split(':')[0])
    total_hours = departure_time - entry_hour
    return total_hours

# Route to handle user input
@app.route('/input', methods=['POST'])
def handle_input():
    data = request.get_json()
    date = data['date']
    entry_hour = data['entry_hour']
    departure_time = data['departure_time']

    # Calculate total hours
    total_hours_per_day = calculate_total_hours(entry_hour, departure_time)

    # Append data to the worksheet
    ws.append([date, entry_hour, departure_time, total_hours_per_day, ''])

    # Save the workbook
    wb.save('timesheet.xlsx')

    return 'Data added successfully!'

# Route to download the Excel sheet
@app.route('/download', methods=['GET'])
def download_sheet():
    buffer = BytesIO()
    wb.save(buffer)
    buffer.seek(0)
    return send_file(buffer, as_attachment=True, attachment_filename='timesheet.xlsx')

if __name__ == '__main__':
    app.run(debug=True)


# # Define two datetime objects
# start_time = datetime(2022, 1, 1, 12, 0, 0)  # January 1, 2022 12:00:00
# end_time = datetime(2022, 1, 1, 13, 30, 0)  # January 1, 2022 13:30:00

# # Calculate the time difference
# time_diff = end_time - start_time

# # Convert the time difference to an integer (in seconds)
# time_diff_int = time_diff.total_seconds()

# print(time_diff_int)  # Output: 5400 (1 hour 30 minutes in seconds)

def total_hours(hours: datetime):
    hours.total_seconds()/ 3600
    return hours