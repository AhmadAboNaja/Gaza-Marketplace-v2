import json
import requests
import time

# The User's Google Sheets API URL
SHEETS_API_URL = "https://script.google.com/macros/s/AKfycbwYRgT3Z2ma23UBlOHfHkt1z6v-e5_xbEnr975zqrwaIJswhjV2NjVcWx1Htv4hphgS/exec"

def seed_to_sheets():
    # Load the local Amazon seed data we generated earlier
    try:
        with open('db.json', 'r') as f:
            db_data = json.load(f)
    except FileNotFoundError:
        print("db.json not found. Please run the generation script first.")
        return

    print(f"Starting seeding to Google Sheets at {SHEETS_API_URL}...")

    # Seed Users
    print(f"Seeding {len(db_data['users'])} users...")
    for user in db_data['users']:
        payload = {
            "tab": "users",
            "action": "add",
            "data": user
        }
        try:
            requests.post(SHEETS_API_URL, json=payload)
            print(f"  Added user: {user['username']}")
            time.sleep(0.5) # Avoid hitting Apps Script rate limits
        except Exception as e:
            print(f"  Error adding user {user['username']}: {e}")

    # Seed Products (Limiting to 30 for the initial seed to ensure script stability)
    products_to_seed = db_data['products'][:30]
    print(f"Seeding {len(products_to_seed)} products (Sample of 30)...")
    for prod in products_to_seed:
        payload = {
            "tab": "products",
            "action": "add",
            "data": prod
        }
        try:
            requests.post(SHEETS_API_URL, json=payload)
            print(f"  Added product: {prod['name']}")
            time.sleep(0.5)
        except Exception as e:
            print(f"  Error adding product {prod['name']}: {e}")

    print("\n--- Seeding Complete! ---")
    print("Refresh your Google Sheet and the Marketplace app to see the live data.")

if __name__ == "__main__":
    seed_to_sheets()
