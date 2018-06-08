import {SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse} from '@nestjs/websockets';
import {from, Observable} from 'rxjs/index';
import {map} from 'rxjs/internal/operators';

@WebSocketGateway()
export class EventsGateway {
    @WebSocketServer() server;

    @SubscribeMessage('events')
    onEvent(client, data): Observable<WsResponse<number>> {
        const event = 'events';
        const response = [1, 2, 3];
        console.log('Client', client);
        console.log('data', data);

        return from(response)
            .pipe(
                map(
                    res => ({event, data: res})
                )
            );
    }

    @SubscribeMessage('otro')
    otro(client, data) {
        console.log('data', data);
        return this.onEvent(client, data)
    }
}