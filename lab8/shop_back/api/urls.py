from django.urls import path
# from .views import (products_list, product_detail, categories_list, category_detail, products_of_category)

# urlpatterns = [
#     path('products/', products_list),
#     path('products/<int:id>/', product_detail),
#     path('categories/', categories_list),
#     path('categories/<int:id>/', category_detail),
#     path('categories/<int:id>/products/', products_of_category),
# ]

from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, ProductViewSet

router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'products', ProductViewSet)

urlpatterns = router.urls