from django.contrib import admin
from django.utils.html import format_html
from .models import Point

class PointAdmin(admin.ModelAdmin):
    list_display = ['name', 'beacon_address', '_color']

    def _color(self, obj):
        html = '<div style="border: 1px solid; height: 15px; width: 50px; background-color: {0};"><div>'
        return format_html(html.format(obj.color))

admin.site.register(Point, PointAdmin)
