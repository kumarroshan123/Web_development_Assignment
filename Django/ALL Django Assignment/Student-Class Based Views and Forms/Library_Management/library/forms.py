from django import forms

class BookForm(forms.Form):
    title = forms.CharField(max_length=100)
    author = forms.CharField(max_length=200)
    published_date = forms.DateField()
    isbn = forms.CharField(max_length=13, min_length=13)
    pages = forms.IntegerField(min_value=1)
    cover = forms.URLField(required=False)
    