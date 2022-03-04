import requests


def searchResults():
    r = requests.get(BASE_URL + '?q=money' + "&type=artist&limit=10", headers=headers)
    r = r.json()
    return r


CLIENT_ID = 'e025bb4670374a17a485930fb0a6d2ba'
CLIENT_SECRET = 'bfb2753e094643f1a13ff4c62425511e'

AUTH_URL = 'https://accounts.spotify.com/api/token'

# POST
auth_response = requests.post(AUTH_URL, {
    'grant_type': 'client_credentials',
    'client_id': CLIENT_ID,
    'client_secret': CLIENT_SECRET,
})

# convert the response to JSON
auth_response_data = auth_response.json()

# save the access token
access_token = auth_response_data['access_token']
print(access_token)
headers = {
    'Authorization': 'Bearer {token}'.format(token=access_token)
}
BASE_URL = 'https://api.spotify.com/v1/search'

# songName = input()
# type = input()
a = searchResults()
print(a)
print("Printing artists")
# print(a['artists']['items'])
items = a['artists']['items']
images = []
print(items)
for i in range(0,len(items)):
    images = items[i]['images']
# print(len(items))
# print(images)
# imagewidth640 = 
# print(images)
# for i in items:
#     print(i['name'] + "       " + i['type'])
# for i in images:
#     print(i['url'])
