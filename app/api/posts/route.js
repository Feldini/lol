import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Reading the data from post.json file
    const filePath = path.join(process.cwd(), 'app/api/post.json');
    const fileData = fs.readFileSync(filePath, 'utf-8');
    
    // Parse the JSON file data
    const posts = JSON.parse(fileData);

    // Return the data in the response
    return new Response(JSON.stringify(posts), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response('Error fetching posts', {
      status: 500,
    });
  }
}
