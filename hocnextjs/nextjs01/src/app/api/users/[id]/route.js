export function GET(request, { params }) {
  return Response.json({
    id: params.id,
  });
}
