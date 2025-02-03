from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Todo
from .serializers import Todoserializer
from rest_framework import status


class TodoListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        date = request.query_params.get('date')

       
        if date:
            todos = Todo.objects.filter(user=request.user, due_date=date).order_by('due_date')
        else:
            todos = Todo.objects.filter(user=request.user).order_by('due_date')

        serializer = Todoserializer(todos, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    
    
class TodoCreateView(APIView):
    permission_classes=[IsAuthenticated]
    def post(self,request):
        print("Request received at /todos/create/")  # Debugging line
        print("Headers:", request.headers)  # Log headers for debugging
        print("Authenticated user:", request.user)  # Debugging line
        serializer=Todoserializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    




class TodoDetailView(APIView):
    permission_classes=[IsAuthenticated]

    def get(self,request,pk):
        todos=Todo.objects.get(pk=pk,user=request.user)
        serializer=Todoserializer(todos)
        return Response(serializer.data,status=status.HTTP_200_OK)

    def put(self,request,pk):
        todos=Todo.objects.get(pk=pk,user=request.user)
        serializer=Todoserializer(todos,data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data,status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    def delete(self,request,pk):
        todos=Todo.objects.get(pk=pk,user=request.user)
        todos.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)    
                                

        


