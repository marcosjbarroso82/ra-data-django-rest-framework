import django_filters

from exampleapp.models import Author, Comment, Post, Tag, Note


class PostFilter(django_filters.FilterSet):
    title = django_filters.CharFilter(field_name="title", lookup_expr="contains")

    class Meta:
        model = Post
        fields = ["title", "commentable"]


class UserFilterSet(django_filters.FilterSet):
    name = django_filters.CharFilter(field_name="name", lookup_expr="contains")

    class Meta:
        model = Author
        fields = ["name"]

class NoteFilter(django_filters.FilterSet):
    note = django_filters.CharFilter(field_name="note", lookup_expr="contains")

    class Meta:
        model = Note
        fields = ["note"]