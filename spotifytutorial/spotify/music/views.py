from django.forms import Form
from django.shortcuts import render
from django.http import HttpResponse
import requests
import urllib.request
import re
from .forms import searchForm
import pafy
import cv2
import youtube_dl

from pytube import YouTube
from playsound import playsound
from moviepy.editor import *
import pygame
import pyglet
def music(request,song):
    print(song)
    print("Inside Testing page")
    return render(request,'testing.html')

def home(request,pk):
    print(pk)
    search_keyword = pk.replace(" ","+")
    html = urllib.request.urlopen("https://www.youtube.com/results?search_query=" + search_keyword)
    video_ids = re.findall(r"watch\?v=(\S{11})", html.read().decode())
    link="https://www.youtube.com/watch?v=" + video_ids[0]
    print(link)
    SAVE_PATH = '/'.join(os.getcwd().split('/')[:3]) + '/music/static/media'
    ydl_opts = {
        'format': '18',
        'outtmpl':SAVE_PATH + '/'+pk+'.%(ext)s',
    }
    print(ydl_opts['outtmpl'])
    context = {
        'songID':video_ids[0]
    }
    print(context['songID'])
    vidPath='F:/spotifytutorial/spotify/music/static/media/' + pk + '.mp4'
    if(os.path.isfile(vidPath)):
        pygletPlayer(vidPath)
    else:
        with youtube_dl.YoutubeDL(ydl_opts) as ydl:
            ydl.download([link])
        pygletPlayer(vidPath)
    return render(request,'')

def pygletPlayer(vidPath):
        width = 500
        height = 500
        title = "Spotify video player"
        window = pyglet.window.Window(width, height, title)
        player = pyglet.media.Player()
        source = pyglet.media.StreamingSource()
        MediaLoad = pyglet.media.load(vidPath)
        player.queue(MediaLoad)
        player.play()
        @window.event
        def on_draw():
            window.clear()
            if player.source and player.source.video_format:
                player.get_texture().blit(0, 0)
        @window.event
        def on_key_press(symbol, modifier):
            if symbol == pyglet.window.key.P:
                print("Key : P is pressed")
                player.pause()
                print("Video is paused")
            if symbol == pyglet.window.key.R:
                print("Key : R is pressed")
                player.play()
                print("Video is resumed")
            if symbol == pyglet.window.key.RIGHT:
                player.seek(player.time + 15)
            if symbol == pyglet.window.key.LEFT:
                player.seek(player.time - 15)
        pyglet.app.run()

def data(request):
    context = {}
    datas = []
    data = searchResults("sample","album")
    items = data['albums']['items']
    for i in range(len(items)):
        data = {'songname':items[i]['name'],'image':items[i]['images'][1]['url'],'id': items[i]['id']}
        datas.append(data)
    context = {
        'items':datas
    }
    if 'query' in request.POST:
        datas.clear()
        data = []
        form = searchForm(request.POST or None)
        query = request.POST.get('query',None)  
        # print(query)
        form = searchForm(request.POST or None)
        if(form.is_valid()):
            answer = form.cleaned_data.get('dropdown')
            print("Checking "+answer)
        else:
            print('form is invalid')
        
        data = searchResults(query,answer)
        items = data[answer+'s']['items']
        print(len(items))
        # print(items[3])
        # print(items[3]['name'])
        # print(items[3]['images'][0]['url'])
        # print(items[3]['id'])
        for i in range(len(items)):
        # ,'Popularity':items[i]['popularity']
            try:
                data = {'songname':items[i]['name'],'image': items[i]['images'][1]['url'] if items[i]['images'] else 'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png','id': items[i]['id']}
                print(data)
                datas.append(data)
            except:
                continue
        context = {
            'items':datas,
            'searchvalue': str(query).replace(" ","")
        }
    return render(request,'test.html',context)
    


def searchResults(query,answer):
    CLIENT_ID = 'e025bb4670374a17a485930fb0a6d2ba'
    CLIENT_SECRET = 'bfb2753e094643f1a13ff4c62425511e'
    AUTH_URL = 'https://accounts.spotify.com/api/token'
    auth_response = requests.post(AUTH_URL, {
        'grant_type': 'client_credentials',
        'client_id': CLIENT_ID,
        'client_secret': CLIENT_SECRET,
    })
    auth_response_data = auth_response.json()
    access_token = auth_response_data['access_token']
    headers = {
        'Authorization': 'Bearer {token}'.format(token=access_token)
    }
    BASE_URL = 'https://api.spotify.com/v1/search'
    r = requests.get(BASE_URL + '?q='+query + "&type="+answer, headers=headers)
    r = r.json()
    return r


