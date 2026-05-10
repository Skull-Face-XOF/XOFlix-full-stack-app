from django.shortcuts import render

# Create your views here.

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import MovieNote

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_notes(request):
    notes = MovieNote.objects.filter(user=request.user)
    data = [{"id": n.id, "movie_title": n.movie_title, "note": n.note} for n in notes]
    return Response(data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_note(request):
    movie_title = request.data.get("movie_title")
    note = request.data.get("note")

    MovieNote.objects.create(
        user=request.user,
        movie_title=movie_title,
        note=note
    )

    return Response({"message": "Note created"})

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_note(request, pk):
    try:
        note = MovieNote.objects.get(id=pk, user=request.user)
        note.delete()
        return Response({"message": "Note deleted"})
    except MovieNote.DoesNotExist:
        return Response({"error": "Note not found"}, status=404)