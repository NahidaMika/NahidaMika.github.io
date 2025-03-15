import openpyxl
import time
import pandas as pd
from openpyxl import Workbook
from openpyxl.utils.dataframe import dataframe_to_rows
from openpyxl import load_workbook

import pandas as pd
from datetime import datetime

from io import BytesIO

def total_hours(hours):
    hours.total_seconds()/ 3600
    return hours

# Define two datetime objects
start_time = datetime(2025,3,11,hour=13, second=0, minute=0)  # January 1, 2022 12:00:00
end_time = datetime(2025,3,11,hour=18, second=0, minute=0)  # January 1, 2022 13:30:00

# Calculate the time difference
time_diff = end_time - start_time

# Convert the time difference to an integer (in seconds)
time_diff_int = time_diff.total_seconds()

print(total_hours(time_diff))  # Output: 5400 (1 hour 30 minutes in seconds)

dia_1_1 = datetime(2025,2,26,13, 0, 0)  
dia_1_2 = datetime(2025,2,26,18, 0, 0)
dia_1 = dia_1_2 - dia_1_1

dia_2_1 = datetime(2025,2,27,13, 0, 0)  
dia_2_2 = datetime(2025,2,27,18, 0, 0)
dia_2 = dia_2_2 - dia_2_1

dia_3_1 = datetime(2025,3,1,9, 22, 0)
dia_3_2 = datetime(2025,3,1,14, 0, 0)
dia_3 = dia_3_2 - dia_3_1

dia_4_1 = datetime(2025,3,3, 13, 9, 0)
dia_4_2 = datetime(2025,3,3, 17, 30, 0)
dia_4 = dia_4_2 - dia_4_1

dia_5_1 = datetime(2025,3,5, 13, 2, 0)
dia_5_2 = datetime(2025,3,5, 17, 30, 0)
dia_5 = dia_5_2 - dia_5_1

dia_6_1 = datetime(2025,3,6, 12, 45, 0)
dia_6_2 = datetime(2025,3,6, 17, 45, 0)
dia_6 = dia_6_2 - dia_6_1

dia_7_1 = datetime(2025,3,8, 9, 10, 0)
dia_7_2 = datetime(2025,3,8, 14, 15, 0)
dia_7 = dia_7_2 - dia_7_1

dia_8_1 = datetime(2025,3,10, 13, 3, 0)
dia_8_2 = datetime(2025,3,10, 17, 40, 0)
dia_8 = dia_8_2 - dia_8_1

dia_9_1 = datetime(2025,3,11, 13, 40, 0) #*2
dia_9_2 = datetime(2025,3,11, 17, 34, 0)
dia_9 = dia_9_2 - dia_9_1

dia_10_1 = datetime(2025,3,12, 13, 5, 0)#*2
dia_10_2 = datetime(2025,3,12, 17, 34, 0)
dia_10 = dia_10_2 - dia_10_1

dia_11_1 = datetime(2025,3,13, 13, 5, 0) #*2
dia_11_2 = datetime(2025,3,13, 17, 36, 0)
dia_11 = dia_11_2 - dia_11_1

dia_12_1 = datetime(2025,3,14, 10, 21, 0)
dia_12_2 = datetime(2025,3,14, 18, 0, 0)
dia_12 = dia_12_2 - dia_12_1

total = dia_1 + dia_2 + dia_3 + dia_4 + dia_5 + dia_6 + dia_7 + dia_8 + (dia_9*2) + (dia_10*2) + (dia_11*2) + (dia_12 *2 )

print(total_hours(total))
