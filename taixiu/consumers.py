from channels.security.websocket import AsyncWebsocketConsumer
import json
import asyncio
import random
import requests
import httpx


num = 46
num_15s = 17
list_resutl = [1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1] # kết quả sẽ được lưu
money_total_random_tai = 0
money_total_random_xiu = 0

total_user_bet_tai = 0
total_user_bet_xiu = 0

num_round = 11436

money_user_bet = {}
list_user_win = {}
# {username: [choose, money_bet]}

class Connect(AsyncWebsocketConsumer):
    async def connect(self):
        self.username = None
        self.password = None
        await self.accept()
        await self.channel_layer.group_add('taixiu_group', self.channel_name)
        if not (num < 46) :
            asyncio.ensure_future(self.send_data())


        await self.send(text_data=json.dumps({
            'status':'list_result',
            'list_result':list_resutl

        }))

     #  MỖI 1 GIÂY SẼ CẬP NHẬT 1 LẦN (COIN, MONEY    )
    async def send_data(self):
        global num, money_total_random_tai, money_user_bet, list_user_win, num_round,list_resutl, money_total_random_xiu, total_user_bet_xiu, total_user_bet_tai
        if num != 46: return
        if num < 0: return 
        while True:
            
            # GỬI BỘ ĐẾM 
            await self.channel_layer.group_send('taixiu_group', {
                'type':'sendToGroup',
                'status':'Counter',
                'num':num
            })

            if num > 5:
                await self.random_money() 
                await self.random_user()
            # GỬI TIỀN ẢO TĂNG LÊN, VÀ USER BET
            await self.channel_layer.group_send('taixiu_group', {
                'type':'sendToGroup',
                'status':'money_random_&&_user_random',
                'money_tai':money_total_random_tai,
                'money_xiu':money_total_random_xiu,
                'total_user_bet_tai':total_user_bet_tai,
                'total_user_bet_xiu':total_user_bet_xiu,
                'num_round':num_round
            })
            num -= 1
            if num < 0:
                ##lúc này sẽ gửi về 1 tín hiệu về client gồm(tín hiệu, kết quả)
                dice1, dice2, dice3 = await self.random_result()
                await self.channel_layer.group_send('taixiu_group', {
                                'type':'sendToGroup',
                                'status':'result',
                                'dice1':dice1,
                                'dice2':dice2,
                                'dice3':dice3,
                            })
                await self.handleResult()
                await self.channel_layer.group_send('taixiu_group', {
                    'type':'sendToGroup',
                    'status':'list_user_win',
                    'list_user_win':list_user_win

                })
                # RESET
                await asyncio.ensure_future(self.countdown_15s())

                #GỬI LIST KẾT QUẢ CHỨA 16 DỮ LIỆU
                await self.channel_layer.group_send('taixiu_group', {
                    'type':'sendToGroup',
                    'status':'list_result',
                    'list_result':list_resutl

                })

                # RESET
                money_total_random_xiu = 0
                money_total_random_tai = 0
                num = 45
                total_user_bet_xiu = 0
                total_user_bet_tai = 0
                num_round += 1
                money_user_bet = {}
                list_user_win = {}

                
            await asyncio.sleep(1)
            
    async def countdown_15s(self):
        global num_15s
        while True:
            await self.channel_layer.group_send('taixiu_group', {
                'type':'sendToGroup',
                'status':'num_15s',
                'num':num_15s
            })

            if num_15s <= 0:
                num_15s = 17

                # # GỬI API LẤY LẠI DỮ LIỆU TIỀN CỦA MÌNH SAU KHI XONG 1 VÁN GỬI CHO NGƯỜI DÙNG

                # full_url = f"http://{self.scope['server'][0]}:{self.scope['server'][1]}"
                # async with httpx.AsyncClient() as client:
                #     response = await client.get(f'{full_url}/get-money/?username={self.username}')
                #     if response.status_code == 200:
                #         data = response.json()
                #         await self.send(text_data=json.dumps({
                #             'status':'info',
                #             'money':str(data['money'])
                #         }))
                #     else:
                #         await self.send(text_data='Error: Unable to fetch data from API')

                ####################################################
                break
            num_15s -= 1
            await asyncio.sleep(1)

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard('taixiu_group', self.channel_name)
        self.close()

    async def receive(self, text_data):
        global money_total_random_tai, money_total_random_xiu
        data = json.loads(text_data)

        if data['status'] == 'info':
            self.username = data['username']
            self.password = data['password']
            await self.login()
        if data['status'] == 'bet':
            username = data['username']
            choose = data['choose']
            money_bet = data['money_bet']

            if money_bet == 0: 
                return 
            try:
                did = money_user_bet[f'{username}']
                if choose == 1:
                    money_total_random_tai += money_bet - did[1]
                else:
                    money_total_random_xiu += money_bet - did[1]
            except KeyError:
                if choose == 1:
                    money_total_random_tai += money_bet
                else:
                    money_total_random_xiu += money_bet
            money_user_bet[f'{username}'] = [choose, money_bet]
            # Xử lý tin nhắn và gửi lại kết quả
            # response_data = {'message': f'You said: {message}'}
        # await self.send(text_data=json.dumps(response_data))


    async def sendToGroup(self, event):
        _type = event['status']

        if _type == 'Counter':
            num = event['num']
            await self.send(json.dumps({
                'status':'counter',
                'time':num
            }))

        elif _type == 'result':
            dice1 = event['dice1']
            dice2 = event['dice2']
            dice3 = event['dice3']
            await self.send(json.dumps({
                        'status':'result',
                        'dice1':dice1,
                        'dice2':dice2,
                        'dice3':dice3,
                    }))
            
        elif _type == 'money_random_&&_user_random':
            money_tai = event['money_tai']
            money_xiu = event['money_xiu']
            total_user_tai = event['total_user_bet_tai']
            total_user_xiu = event['total_user_bet_xiu']
            num_round = event['num_round']
            await self.send(json.dumps({
                'status':'money_random_&&_user_random',
                'money_tai':money_tai,
                'money_xiu':money_xiu,
                'total_user_bet_tai':total_user_tai,
                'total_user_bet_xiu':total_user_xiu,
                'num_round':num_round
            }))

        elif _type == 'num_15s':
            num = event['num']
            await self.send(json.dumps({
                'status':'counter_15s',
                'num':num,
            }))

        elif _type == 'list_result':
            list_resutl = event['list_result']
            await self.send(json.dumps({
              'status':'list_result',
               'list_result':list_resutl,
            }))

        elif _type == 'list_user_win':
            list_user_win = event['list_user_win']
            await self.send(json.dumps({
             'status':'list_user_win',
               'list_user_win':list_user_win,
            }))
    async def random_result(self):
        global list_resutl
        dice1 = random.randint(1, 6)
        dice2 = random.randint(1, 6)
        dice3 = random.randint(1, 6)

        total = dice1 + dice2 + dice3
        if total >= 11:
            list_resutl = [1] + list_resutl[:-1]
        else:
            list_resutl = [0] + list_resutl[:-1]
        return dice1, dice2, dice3
    

    async def random_money(self):
        global money_total_random_xiu, money_total_random_tai
        
        money_total_random_tai += random.randint(100000000, 150000000)
        money_total_random_xiu += random.randint(100000000, 150000000)
    async def random_user(self):
        global total_user_bet_tai, total_user_bet_xiu
        
        total_user_bet_tai += random.randint(1, 300)
        total_user_bet_xiu += random.randint(1, 300)


    async def login(self):

        # Địa chỉ endpoint tùy chọn
        endpoint = 'get-data-user'  # Thay đổi địa chỉ endpoint tùy theo yêu cầu của bạn

        # Xây dựng URL hoàn chỉnh với host và endpoint
        full_url = f"https://{self.scope['server'][0]}:{self.scope['server'][1]}/{endpoint}/?username={self.username}&password={self.password}"
      
        

        async with httpx.AsyncClient() as client:
            # Gửi yêu cầu HTTP đến API
            response = await client.get(full_url)
            
            # Xử lý phản hồi
            if response.status_code == 200:
                data = response.json()
                await self.send(text_data=json.dumps({
                    'status':'info',
                    'money':str(data['money'])
                }))
            else:
                await self.send(text_data='Error: Unable to fetch data from API')

    async def handleResult(self):
        global list_resutl, money_user_bet, list_user_win
        endpoint_handleResult = 'handleResult'  
      
        protocol = 'https://'
        # is_secure = self.scope.get("type") == "https"
        # if is_secure:
        #     protocol = 'https://'
        # else:
        #     protocol = 'http://'
        full_url = f"{protocol}{self.scope['server'][0]}:{self.scope['server'][1]}"

        # Xây dựng URL hoàn chỉnh với host và endpoint
        async with httpx.AsyncClient() as client:
            for key, value in money_user_bet.items():
                if (value[0] == list_resutl[0]):
                    list_user_win[key] = value[1] * 1.98
                    await client.get(f'{full_url}/{endpoint_handleResult}/?username={key}&money={str(value[1])}&status=cong')
    


        
