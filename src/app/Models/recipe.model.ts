export interface Recipe {
  id: undefined;
  name: string;
  cuisine: string;
 category: string[];           // e.g., ["Gluten Free", "Dairy Free"]
  prepTime: string;         // e.g., "20 minutes"
  likes: number;
  rating: number;           // e.g., 4 stars out of 5
  image: string;            // relative path to image in /assets
  instructions : string;
}
