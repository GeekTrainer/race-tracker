import sqlite3

# Connect to the SQLite database (or create it if it doesn't exist)
conn = sqlite3.connect('./prisma/dev.db')

# Create a cursor object
c = conn.cursor()

name = input('Enter name of race: ')


# Fetch all the rows
rows = c.fetchall()

for row in rows:
    print(row)

# Close the connection
conn.close()