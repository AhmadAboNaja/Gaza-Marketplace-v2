import json
import random

def generate_amazon_data():
    amazon_products = [
        {"name": "Fire TV Stick 4K with Alexa Voice Remote", "price": 49.99, "category": "Electronics", "desc": "Cinematic 4K entertainment with support for Dolby Vision, HDR10+, and immersive Dolby Atmos audio.", "img": "https://m.media-amazon.com/images/I/41m9mK91mVL._AC_SL1000_.jpg"},
        {"name": "Apple AirPods (2nd Generation) Wireless Earbuds", "price": 89.00, "category": "Electronics", "desc": "Quick access to Siri by saying “Hey Siri” and seamless switching between Apple devices.", "img": "https://m.media-amazon.com/images/I/7120GgUKj3L._AC_SL1500_.jpg"},
        {"name": "Echo Dot (5th Gen, 2022 release) Smart Speaker", "price": 49.99, "category": "Electronics", "desc": "Our best-sounding Echo Dot yet: enjoy an improved audio experience with clearer vocals and deeper bass.", "img": "https://m.media-amazon.com/images/I/71C3lbbeLsL._AC_SL1500_.jpg"},
        {"name": "Instant Pot Duo 7-in-1 Electric Pressure Cooker", "price": 99.95, "category": "Home & Kitchen", "desc": "Cooks fast and saves time: The Instant Pot Duo multi-cooker combines 7 appliances in one.", "img": "https://m.media-amazon.com/images/I/61S8n6S9DVL._AC_SL1500_.jpg"},
        {"name": "Lodge 10.25 Inch Cast Iron Skillet", "price": 19.90, "category": "Home & Kitchen", "desc": "The Lodge 10.25-inch skillet is a multi-functional cookware that works wonders with slow-cooking recipes.", "img": "https://m.media-amazon.com/images/I/81h29-Y9vDL._AC_SL1500_.jpg"},
        {"name": "Fullstar Vegetable Chopper - Spiralizer & Slicer", "price": 24.99, "category": "Home & Kitchen", "desc": "4 interchangeable blades let you julienne, chop and slice vegetables with ease.", "img": "https://m.media-amazon.com/images/I/81C6N9hDk6L._AC_SL1500_.jpg"},
        {"name": "Revlon One-Step Volumizer Enhanced 1.0 Hair Dryer", "price": 39.87, "category": "Beauty & Personal Care", "desc": "Unique oval brush design for smoothing the hair, while the round edges create volume.", "img": "https://m.media-amazon.com/images/I/71Z882cOalL._AC_SL1500_.jpg"},
        {"name": "Essence Lash Princess False Lash Effect Mascara", "price": 4.99, "category": "Beauty & Personal Care", "desc": "Lash Princess False Lash Mascara defines and separates lashes while achieving a bold look.", "img": "https://m.media-amazon.com/images/I/61m1T6F8i6L._AC_SL1500_.jpg"},
        {"name": "Mighty Patch Original from Hero Cosmetics", "price": 12.99, "category": "Beauty & Personal Care", "desc": "The original award-winning acne patch that improves the look of pimples overnight.", "img": "https://m.media-amazon.com/images/I/51A8i5pXfUL._AC_SL1000_.jpg"},
        {"name": "Carhartt Men's K121 Workwear Pocket T-Shirt", "price": 19.99, "category": "Clothing, Shoes & Jewelry", "desc": "Carhartt's signature workwear T-shirt made with heavy-weight cotton for durability.", "img": "https://m.media-amazon.com/images/I/81K0q9u9GmL._AC_UX679_.jpg"},
        {"name": "Crocs Unisex-Adult Classic Clogs", "price": 44.95, "category": "Clothing, Shoes & Jewelry", "desc": "The iconic clog that started a comfort revolution around the world.", "img": "https://m.media-amazon.com/images/I/61p-L8W-S8L._AC_UX679_.jpg"},
        {"name": "Levi's Men's 505 Regular Fit Jeans", "price": 48.00, "category": "Clothing, Shoes & Jewelry", "desc": "The original zip fly, created in 1967, the 505 Regular Fit Jean is one of our most popular straight fits.", "img": "https://m.media-amazon.com/images/I/81N0m9fV92L._AC_UX679_.jpg"},
        {"name": "LEGO Star Wars: The Mandalorian Baby Yoda (Grogu)", "price": 71.99, "category": "Toys & Games", "desc": "Build and display a charming brick-built model of The Child from Star Wars: The Mandalorian.", "img": "https://m.media-amazon.com/images/I/81mD9U9mGmL._AC_SL1500_.jpg"},
        {"name": "Crayola Inspiration Art Case Coloring Set", "price": 25.49, "category": "Toys & Games", "desc": "A portable art studio containing 140 pieces including crayons, colored pencils, and markers.", "img": "https://m.media-amazon.com/images/I/91N9mK91mVL._AC_SL1500_.jpg"},
        {"name": "Exploding Kittens Card Game", "price": 19.99, "category": "Toys & Games", "desc": "A highly-strategic, kitty-powered version of Russian Roulette.", "img": "https://m.media-amazon.com/images/I/71R9mK91mVL._AC_SL1500_.jpg"}
    ]

    users = [{"id": "admin1", "username": "admin", "password": "password", "role": "admin", "name": "Global Manager"}]
    for i in range(1, 6):
        users.append({"id": f"c{i}", "username": f"client{i}", "password": "password", "role": "client", "name": f"Amazon Shopper {i}"})
    for i in range(1, 6):
        users.append({"id": f"v{i}", "username": f"vendor{i}", "password": "password", "role": "vendor", "name": f"Amazon Authorized Seller {i}", "status": "approved"})
        
    products = []
    # Mix Amazon products to reach 100 listings
    for i in range(1, 101):
        v_id = f"v{random.randint(1, 5)}"
        template = random.choice(amazon_products)
        products.append({
            "id": f"p{i}",
            "vendorId": v_id,
            "name": f"{template['name']} - #{i}",
            "price": template["price"],
            "category": template["category"],
            "description": template["desc"],
            "image": template["img"]
        })
        
    data = {"users": users, "products": products, "orders": []}
    with open('db.json', 'w') as f:
        json.dump(data, f, indent=2)

if __name__ == "__main__":
    generate_amazon_data()
    print("Amazon Top-Sellers data successfully integrated into Gaza Marketplace.")
