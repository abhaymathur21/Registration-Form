from django.contrib import admin
from .models import React

# Register your models here.

class MemberAdmin(admin.ModelAdmin):
    list_display = ("name", "mobile", "city", "state",)

admin.site.register(React,MemberAdmin)