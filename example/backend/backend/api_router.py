from django.conf import settings
from rest_framework.routers import DefaultRouter, SimpleRouter

from exampleapp.api import TagViewSet, PostViewSet, CommentViewSet, UserViewSet, NoteViewSet

if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()

router.register("tags", TagViewSet)
router.register("posts", PostViewSet)
router.register("comments", CommentViewSet)
router.register("users", UserViewSet)
router.register("notes", NoteViewSet)


app_name = "api"
urlpatterns = router.urls
