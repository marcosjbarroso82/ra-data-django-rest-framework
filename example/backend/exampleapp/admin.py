from django.contrib import admin
from .models import Author, Tag, Post, Comment, Note

admin.site.register(Author)
admin.site.register(Tag)
admin.site.register(Post)
admin.site.register(Comment)
admin.site.register(Note)