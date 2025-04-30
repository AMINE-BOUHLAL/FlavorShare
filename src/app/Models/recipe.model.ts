export interface Recipe {
  id: number;
  name: string;
  cuisine: string;
  diet: string[];           // e.g., ["Gluten Free", "Dairy Free"]
  prepTime: string;         // e.g., "20 minutes"
  likes: number;
  rating: number;           // e.g., 4 stars out of 5
  image: string;            // relative path to image in /assets
  instructions : string;
}
