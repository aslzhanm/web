from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from .models import Category, Product

def products_list(request):
    products = Product.objects.all()
    data = []

    for p in products:
        data.append(
            {
                "id": p.id,
                "name": p.name,
                "price": p.price,
                "description": p.description,
                "count": p.count,
                "is_active": p.is_active,
                "category": {
                    "id": p.category.id,
                    "name": p.category.name
                }
            }
        )

    return JsonResponse(data, safe=False)

from django.shortcuts import get_object_or_404

def product_detail(request, id):
    product = get_object_or_404(Product, id=id)

    data = {
       "id": product.id,
        "name": product.name,
        "price": product.price,
        "description": product.description,
        "count": product.count,
        "is_active": product.is_active,
        "category": {
            "id": product.category.id,
            "name": product.category.name
        }
    }

    return JsonResponse(data)

def categories_list(request):
    categories = Category.objects.all()
    data = []

    for c in categories:
        data.append({
            "id": c.id,
            "name": c.name
        })

    return JsonResponse(data, safe=False)

def category_detail(request, id):
    category = get_object_or_404(Category, id=id)

    data = {
        "id": category.id,
        "name": category.name
    }

    return JsonResponse(data)


def products_of_category(request, id):
    category = get_object_or_404(Category, id=id)

    products = Product.objects.filter(category=category)

    data = []

    for p in products:
        data.append(
            {
                "id": p.id,
                "name": p.name,
                "price": p.price,
                "description": p.description,
                "count": p.count,
                "is_active": p.is_active,
                "category": {
                    "id": p.category.id,
                    "name": p.category.name
                }
            }
        )

    return JsonResponse(data, safe=False)        


# lab9
from rest_framework import viewsets
from .serializers import CategorySerializer, ProductSerializer

from rest_framework.decorators import action
from rest_framework.response import Response

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    @action(detail=True, methods=['get'])
    def products(self, request, pk=None):
        category = self.get_object()
        products = category.product_set.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


