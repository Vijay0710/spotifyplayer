from django import forms

class searchForm(forms.Form):
    CHOICES = (
        ('album','Album'),
        ('artist','Artist'),
        ('playlist','Playlist'),
        ('track','Track'),
        ('show','Show'),
        ('episode','Episode')
    )
    dropdown = forms.ChoiceField(choices = CHOICES)