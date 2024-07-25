export function GET(request) {
  const q = request.nextUrl.searchParams.get("q");
  return Response.json(
    {
      q,
      data: [
        {
          id: 1,
          name: "User 1",
        },
        {
          id: 2,
          name: "User 2",
        },
        {
          id: 3,
          name: "User 3",
        },
      ],
    },
    {
      status: 200,
    }
  );
}

export async function POST(request) {
  const body = await request.json();
  return Response.json({ body }, { status: 201 });
}
