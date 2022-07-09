import React, { useState } from 'react'
import styles from './Chat.module.css'
import { UserPhoto, Check } from '../../images/inedex.js'
import Message from '../../components/Message/Message'
import Dialogs from '../../conteiner/Dialogs.js'
import song from './echoed-ding-459.mp3'
import { Search, EditIconSideChatHeaders, people } from '../../images/inedex.js'
import Status from '../../components/Status/Status'
import ChatInput from '../../components/ChatInput/ChatInput'
import { useDispatch, useSelector } from 'react-redux'
import { tr } from 'date-fns/locale'



function Chat() {
    const [isOpen, setIsOpen] = useState(false)



    const OpenChat = () => {
        setIsOpen(true)

    }
    const CloseChat = () => {
        setIsOpen(false)

    }

    return (

        <div className={styles.chat}>

            <div className={styles.chat__sidebar}>

                <div className={styles.chat__sidebar_headers}>

                    <input type='text' placeholder='Поиск...'
                        className={styles.chat__sidebar_headers_search} />
                    <img src={Search} alt='Search Person'
                        className={styles.chat__sidebar_headers_searchIcon} />

                    <div className={styles.chat__sidebar_headers_form}>
                        <img src={EditIconSideChatHeaders} alt=''
                            className={styles.chat__sidebar_headers_formIcon} />
                    </div>

                </div>


                <div className={styles.chat__sidebar_dialogs} onClick={OpenChat} >

                    <Dialogs
                        items={[
                            {
                                user: {
                                    fullname: 'Иван Петров',
                                    avator: 'https://media.istockphoto.com/photos/portrait-of-mature-hispanic-man-picture-id805012064?k=20&m=805012064&s=170667a&w=0&h=nhXnaKSbiapEENUn7PRcBwWS2EBaCBoy08638D9sfgU=',
                                    isOnline: true,
                                    unreaded: 800
                                },
                                lastMessage: {
                                    text: "Мир мир qмир мир",
                                    isReaded: true,
                                    created_at: new Date()
                                }
                            },

                            {
                                user: {
                                    fullname: 'Александра Петрова',
                                    avator: 'https://mfc74.ru/wp-content/uploads/2021/09/4519e94cb5ef4989314a6d05b43da142.jpg',
                                    unreaded: 8
                                },
                                lastMessage: {
                                    text: "Tesla00",
                                    isReaded: false,
                                    created_at: new Date()
                                }
                            },
                            {
                                user: {

                                    fullname: 'Инна Смирнова',
                                    avator: '',

                                },
                                lastMessage: {
                                    unreaded: 8,
                                    text: "Мир мир qмир мир",
                                    isReaded: false,
                                    created_at: new Date(),

                                }
                            },
                            {
                                user: {
                                    fullname: 'Фёдрол Максим',
                                    avator: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWtYVDbQNOlWyIN4oLkugJ5Fa7UqUjYz4jJA&usqp=CAU',
                                    isMe: true,
                                },
                                lastMessage: {
                                    text: "Мир мир qмир мир",
                                    isReaded: false,
                                    created_at: new Date()
                                }
                            },
                            {
                                user: {
                                    fullname: 'Фёдрол Максим',
                                    avator: 'data:image/jpeg;base64,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',
                                    isMe: true,
                                },
                                lastMessage: {
                                    text: "Мир мир qмир мир",
                                    isReaded: false,
                                    created_at: new Date()
                                }
                            },
                            {
                                user: {
                                    fullname: 'Фёдрол Максим',
                                    avator: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeOmPvx0kCt0JnNsolRvuqzIIGcnSYJ3Hi5IF_DK7kwQVyUescvFQgTHNI5deB90fYjgc&usqp=CAU',
                                    isMe: true,
                                },
                                lastMessage: {
                                    text: "Мир мир qмир мир",
                                    isReaded: false,
                                    created_at: new Date()
                                }
                            },
                            {
                                user: {
                                    fullname: 'Фёдрол Максим',
                                    avator: 'data:image/jpeg;base64,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',
                                    isMe: true,
                                },
                                lastMessage: {
                                    text: "Мир мир qмир мир",
                                    isReaded: false,
                                    created_at: new Date()
                                }
                            },
                            {
                                user: {
                                    fullname: 'Фёдрол Максим',
                                    avator: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBcWFRgWFRYYGRgaGhocGhoaHBoYGBwcGhgcHhgYGhocIS4lHCErHxoaJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHhISGjQhJCE0NDQ0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0ND80NDQ0PzQ1NDQ0NDQ/PzE0Mf/AABEIAPgAywMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAGAAEDBAUCB//EAEQQAAIBAgMEBwYDBgMHBQAAAAECAAMRBCExBRJBUQYiYXGBkbETMqHB0fBCUuEUI2JykvEHgrIzNENTdKKzJGNzwtL/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAhEQADAQADAQEAAwEBAAAAAAAAAQIRAyExEkEiMlFxE//aAAwDAQACEQMRAD8A19lbad3FOtQaizqXp3Nw6jXPgc9JoJjCcQ1HdFhTV965uSzlbW5ZShtwbqYepxSrTz7HG4fWT0x/69/+np/+RoBsONtbXajVw6KFIqPuvcZhchccsyJs2gv0iG9Udv8Ak0EcdhNZT6IYVX4zfoBoo8e0Jhoo9o8xho06imMcxTP23tilhkL1WA13V/E5A90D5zzrHdPK7k+zQKO3MD78IGwpHqd5DisIlRd10Vx/EAfI8J5VS6bYsfiS3amfmDrOaW1UdrVt4sbn2m+979ov1R3Qab5D9tgvTN8LXel/7b3qUu6zZjwM2cHv7i+13N+3W3L7t+y/Cebvt39mdQlR6ialCd/dyuCrHnl5TvEf4hAqwWm4uCAxIyNtSBNpsPRqOJRyyo6uVyYAhrHkRKGD2FTpV3rJvLvrY0wbJe+bAfKeT0MagZB+8pXXdZ6bEs7E5MQSLa6T1LZ2KVKaIGLbqgXY3JsNSecH0v0b5ZtidWmUm0V5y5h8UraGZUmByyzFHitGMNMrbdPdArpQWrVp5IDe9mI3iLcRrNa04roSrBTYkEA8jbIzGAN+leKYpuJRBdioprd6mRswIJ6vGehUjkOraYWwNgJhhf36re/UOpJ1C8heb9AjdHj6weGBjpL/ALun/wAuH/1rJ0H/AK+p/wBPT/8AI0h20d58LR4tURyOISmpJNuV7Seh/v8AU/6en/5HhAVqlL2j4/8AkSn/AE0y3q019mVd+jTf8yIfNRBnDdHaWKatWqNUu1aooCturZDug2tnpNrou18LSH5QUPejFflMZmsIo8UYAorR40xhEQe6U9KEwihQN+s46iDTsZzwX4mcdLulKYVdxbPXYdVbXCg6O/ZyHG3KeTVsWzuzuSzsbu5OfC3dFbGmdH2hiKuIqGpXe7k8cgo4Ko0QDkI7UjugbyBeQyytzbXvkiKqrvsbka8v17s/CUMTiixsAfK3jaBBeFRz2ztFIaxP6RqJswJIyP33yWxXrrxOV/WEGFwZe9p3C8q1a2fVyHCc1sQ5F2UW5i9z8YkVWHVYX/KQQfAjI+Npjb/pc2ftIp3XBItcHnYcDDjDYveUMhuCMjPOLWPIjgdJqbF2maTbpzQnMcV7R2SNzvaKxWdPwNfaGWMHi2Qg3lRHDAMDcEXB53nQnNrR0NJhxs3Ghx2y/APAYso1+HGGeBxQdQROrjv6OW5+WWYjHkGOvuPup7Q29y4Xe5i50ylRDNOzsUdcWR/JSpj1vNXYlE06FNGA3lFjnxuYFJh6KVd1kxWEUqqqFZyu+WNzvLvC1rCHdHIAa2yuTme+YzMDY+wEoOzl3qVGG7vubkL+VRwEvpgwKzVrneZFQjLdAUkg873JlmKEUr7Owa0UCISQCzXOZJZixvbtMfAYNaSlEvYsz5m+btvG3ZcyyIpjCjxRQmFMnpJtlMLQao1idEX8zkHdXu59gM1HcAffxnjnTrbPt8QUU3SmbDte3Wbw0HcYG8Clpg4nFPUdnc7zu28x4k/Ifpyk9NLJvnTQEcTKNJ8xz+Heec1lSwBOZ/COXbaIU0qrS4tr+EHgDmNfOVsTx4+OXnxl5lOZJPb9JSxJv9+kXew4sKTv5TRwFFaiMCbEC6m3LXTOZrrN/ZWHKUnqWNyLA9mYJjsmvTISrundJuPMSUru5odeHPwOonPs94k8fgZNQw+lzkTw1BgCyOpigdaa35gspHhe3hacOARfhw5g9slajmVOovn2cGjVlutuI+PaDD6Dw2+jWO1ptkdV5EcR984SKZ5/gcQUdSfwm4+Y8od0KgIBByIFvlOXlnHp08daiYTW2JjNxwL5GZM6RrG8Sax6PU/Sw9ER7zP2phqjkFKjU1RSwKWZmf8AKykZrbh2ypsraIcMgezhc+JW9wG+B8pY2DtX2qlH/wBogzysHW9lqp/CbTsmk0cbWM52Vj6zN7LEIof2YfeQ3QgmwDKc1a4OWmU3aYy8/WVxTAJYAbzWueJtkLyjW29RRijNmpsbc43gC3HjRxCAcR40eEwozNYR5y558BfyExgb6Z7V/ZsM7A9dzuJxzIuT4Afd54yTe5J45nmTmfjCj/ErahqYo0werSAAH8TKN4nttuiClUWsOWvfyiPsZeFnBUwzXPOwHObNtTmSch46fE6TP2bTyudBe3abXv3AW85aeoLE30O6ttSTqfGAYjri5sDpw4C3E+N5UxAGgOeh5+EvUqZc7ieNvTtM3Nm7FuRuqc+fYefGK3g6l0CNDZrsclPO+R9NIY7G2cwRlYEXGY155jtvwm+Nk7psRe47lBA4Dl3y42GIGYtlry/S8nVspPGjzzH7CdCSvM5cR3/pM9lYdVxr93vPSK+AZr8SNL8uR585g7V2GTmq562GYPd9IZ5P9BXF/gJubEcew/WcV13luNRke7t7ZJjlKg5aZHstzGoMhSpow00aW0i0Uy8Ith7SAQq34dMr5EgW8Jh4mnY3Ghv8NfW/jOcFV3XB7RFuU0NFYw5faAUqCr5kDesN0E6Z3nD1nLmm1kDq24ym7XU6m+QlDHVRZLPYEowS175jjNXF0CzU3XVHvmbdUqQ05sSOgrbExj08UBVa7OrIwtYFQLoy879a/bDzZGzyGRnf2i0gy0hu7rKrC1na/WsMhp4wTeirMrFQWW5U8RebuF2wtGmXfe3VsDujeOZsJTjvXhLknrQreoL7u8AzA7oyvlqQONotm7PWnTVMmte7G12JYkse8knxmLiBTxlNXw1Rfa0zvU3GqtbNHGu6dD3y3s/pFRNNfa2SpmHRhmpBII7ssuy0vpAuzoRo4jCjiOI0UJhSrj6gVWJ0ADN/KDc/AS2YNdNsVuYWrnYsm7fsJsfgfjAzI8dWo9au1Vvedi55XJuPLKRVk61u3485fwOHsu8RYHMX4AfXOU6rjeJ8u7T4xBkSu4ACqeFvqfE5yR6hyA/CMu8ylTbO/wB24zX2FR9pWUHPrb39PujzN5mx5WsLujuy9xALddtTb3Qe35QvwGFVQAB98pQwq7tgOAmzhFnP9azpzETJhLm8VbDjjL6DKR1ElPlYJpmNRtKeJpATTriZ2KMi0Ulght/ZyPnYX58fMfOBNbCmm7IdCCRPRsWL3gbt+nZ0PafjKRX4Jc/pjN1kz4AeYyPpKrdU56ceI7PvslmgciPvMf2kfst5SOIO6fUGWOdoI+j+KuApsbad02a+JRBdnVR2n0EBtmVSrDhnDenRRyHKKWta5FyOY85z3OUXitQ/tt+mWpHNlJU2yvwylvo9jg6AsAQwKup0vowMytimyun5HYDuJuI+EPssQyaLU6y/zD3hFXTGfaCXBbPRKi0Xuu9c4auh3HA1NFmHvEagHUQgp7Mq2zeg5z670zvtnkW3Ta9uUp4fDJXomm+WhUjVWGasp4EGEGA31pqKhVnA6zWtc851zjWnJXTwjjiMI4jCjiKKKEwzmAH+IWNvu08rtbLja/36Qn2tjbK7F9ylT99xm7WtdU7yQoyuWItkM/IsXjWeszkbm8SAt97cTiN7i3NuZMVsaUV9oYj8KnLS/M8e4ATMc3MuYwgm+QFgABoBbKUwtzlpBo2HSf2hj0Gwm8zP3AeBvBOnTvl99sMNnotKintajIpBYqosTvZ5nWTrsrKwPVQcJeoNaeaN0hpIf3VapfkRfuHjNDB9Ka590I48Va3jEfGxla8PSqeKFrR/bCC2A2x7Q2KMjcQdJptXyg+mH5LNesJnV1vMrHbf3LqiFzx4AeMyam36re+6U17/ABtexg+XRvpSblfD2GWsBekLgkdjD6za/ai2YrgnsuYL7Ydi/W1J1GhsDn8Y0y0zVWoy096LDt1iOeR7/u0d/ePefv4yMjO/d8P7SyIM73bHx9DaF9CmHXca9mAORI4A6jy8IMJT3r27/O36wnCXRczoASOVgPQmR5CvEc4SktLEMiiyugYDtUm8l2hhXqOirZAp3t+/WB0IUSXBYBEN1XrcWJJbzMuqJJvvSudYEPR3CilTAUscySWJYknUwppPkJg7KT92Js4djujx9Z1T/VHFfpwJ1OROpQQQkddssvsDX6eMklfF6d+UwTzjpZimrV6eEX3UO+1jbrsL7x/lVsu0wT2qFWq4Asq5WHZkqjsyENcNQDY7GHjvhRfUAKosL8yy+UBNtv8AvqlsuufDkIrHko1HLGSqth9+EhQTc2JsZ8QCVGWefaIreDytLHRnZvtHG8OrqfoIcbX2IldCLZ2yt2aTF6M090jhlp9YaYZpJ+nQp2QExfRlytNEVFamxIIX3swwLg33sxbPLOXdjbGCUdx6bGqXLe0uoAvYWHFltnYiHZwSnOwiXCKvCP8ATzsn8rekYdDCFCB3ZeUv7UG7Ty1Ik7pmJHtpuoJF1rKpMHRs7eHW3t3K5UAsLi5axOZ5cB25QO2tseoargI7KahKOzNvbl7bpXvIz1utuM9QwGa2j18CCePw+n3aVmsRKp19nmFPo+TUvSLqlgbva/lr4HOPt3CezNBL3PWuTqSN2ei1sGqC/HXzgH0kb9/SHLeP35TfTph+FK0GXXreAJ5Z3+UhPEc/US7XTrkfwj4EiVags/ifSOvSVeFzAe8p52HnCWm3VA4kj4EEn4QZwnDu9GhPhVuoZuIHllI8hXjLaHOTAyICSCRKhbsp+oO6bVBeqPH1mDsQXUQioe6J2T/VHHX9mVxHjR5QkdCV8SLj711k8ir+73W+nzmCAmGa20MQhGr03H+eiFFzyuPSedYxC9Vyuhd7HQGxPPhYXvDXpwWpYkVVuC9NkJ4XVur4i48oBO+Q5AZDl96xWx0WUCKpReu79Xe/Covdt3wFr98u7O2vWo0nVHCi9gtusCysSy3FrAJn2unhmbPa7347p7+H1mnhcOGDrbIqxJ1KgfiAA/CBfXnM/DJhH0brbyI187Znjcaw1wLg2nnfQup1WS4O6xsRoQTqOzWHGEciQvpnZxVshVh3Fs5UxOLAvxMonFWEWGTeO8YG9WBa/SagSzZyPawuvd6zlnZGOQIvw1lPau2AwVES79gOXa2eURSbUPsTEA65HL1M36gFr8YM7MwrJvMxGYFvMkk+J+E1ExOUZdGa7Ice2s862u29iUF8gDfyMNdr4sKpnnbvvVt431EpInI/44KuoFS/Dj/UfrKmPp2deABF/EkX+Il+snXyOoGp7j/9TIdq0OpvHVbr3kdZSeWhHhKHO2R0Kds+RA84T4JslHYPSC6jInmBpCLBVL7vcPI/reR5EW42aAjzkToSBUKthN1B3wipaCCuwanVtyMLaB6onXHco5L/ALMqRxGjiVIj2kFV8j2SVjlPN+nPSrXDUDne1R9LZZovbnmeGczYUtM3pZtUYmtuKeolwva594+gHjBHE07Ey1Sstjx4DkOVu4CdYhLnz7tL/KIOU9nZP3qw81P0lnF33WA4jP5+k6o0N0q3aR8bel5K+Z8Tfu09ZjZ2c9HMeKdRAcg11PYb9U+eXjPTcNUGU8YNgSOAJHheH3RLajPTs+qm29z0teJyT+lOGvwMauVjrJKO1aaZO+73gj5ZyCi153WohxYyR0rH6Sttegf+Ivxt6SDE7RooLF1uc7L1suZtpKL01v8AvOt25XlZqa3/AHa7utzl4fM+MOFf/OPdLbbZpjR/gZPhahckr7usoUcKFuxzYzrE43cWy+8YvpK8Xhn9IMUEDZ5AEmClBzcMRzPwv8jK+3tp77FFN1B6x/Mb527JYoVAFXt3h/22+cupxHNVfTLdcDfU31v5A2FpRr1CyOBmRZvBD1vgTLmNYeyVuKsP+7XPxmUp3anYb+TAgjyMb8F/SbAtvWU8x45ffwmls5zcjkcu8ZHzt8Jjp1HsD7t7Hw/ST06vWOed8u/XPx+cWlqDLxhjTe4B++2dzA2ZtTPcf3r+Dfr2zeRgfv4TlqWmdMvezT2VX3WtDTCV+oPH1M85DWhHs/aJ9mvj6mUjkzojyRrCG06BjCM2k7DlB/pptv8AZsMzqbO53E/mI4dwE8TQWzPbfnDf/FPFlsTTpcKab3ezn1sBAlMzYZkkDxP6xGNJbwVFnOhNiCfHIfIS9Xyv2AnuuLfWb2B2eMPhjVI634Dkeucg3gC1vGDLuWBNtSFHjqfWbwYVZwEHff0tIcO9++9z3W/X4TvH5AC3d4f2kNt1CezP5RWx0jOZrk9t/if1novRvA+zpqDqRc951gj0a2ca1YXHVWxPaQch55+E9No0bDLsi8lfhuKf04S6m40mtg6gaVQkY0yDdcpFnSjaXCIczaVq1BBkJT/anA0vIMRjmC9VDfvA+JMOrAZ2QbXxaU0LE2ABM8+q4qpinZUO6tiWPZwHZNvaeArYhr1WVEH4FJY+J0vJcDhVTqqLDTv7THnEJffQEY2gEcqNAbX8BNCmvUTtJ+IH0MpbTHXb+Y/fwl/CtvUhnmrC/wAfOUfhGfWaDKGosvEqSDwG7ut+njMOtnum3Z+s1nq7nmQe0Z+WVvKY7tlbPLKEzXZJieD8jn4yD2vr8v1k+GYEbraHI/WVKlIqd09pHaMpkZllF3r52YZiE2wsaXSze8Mj28j8oH72RI4EfSbGxMUEJLXz5ZjSTudQ8VjC+81sD7g8fUwew+OR8gc+Ry8pv4E9QePqZz40X3fAzEZtI8RE9A888o/xTwbLiKdXg9Pd/wA1Nj8mHlMHYODVqiBgLKhqVCxCjM2Az5AjzM9G6f4I1qARFLVFJdQBfqgWe/AZc/jPIfaEenhEY09hJtzbBruFB/dppwvbK4H4eIHG1+co74JvwGnfzA8plJU7JeoqcrDrHTs7u2K3iKTOixA3n7svrJaOBaswVRlxM19l9HHf3gUXmfePcIa7O2SlNQqiw+J7TJOuy3ziKOw9lLSQADvm1uSdUsI6U84mtsHnhAqTtkk3s4xTKAZMrMshelLRWOtODA/RlV6GUyqlKx74S1qczMZhoyFfZ5htVOu3831j7JqWJRsg2V5f6SYfdqHtsfWZ+y6W8WAtcqbX5jS3bOjf4kfKLeNyt2ZHtlA5keUtV6xZA3G1jKDGYI7ixuJJiKm+B+YaH1EhD8Dw+zIz2QgZ0qHQgy1SAlelUsczJ0Us+97o8rwoV+BR0VwYdnJFyoW3G173Pwhng8L1Blz9TBnoMOtVGfuocu9hDjDUOqPHj2mcvI2qZ1cTXybMcRpHiK6ojO7BUUXZjkBOw4SltoFabuo6wRrc+JA9fOeAWJPaTnwtPcsRt6nVBTDsrki5PBbj8psSfSBy9El9qGJuhN7cb/STrkSeFo421rBnZOxHcghbL+Y/KHOx9hpTGQz4k6zYpUAoAsLCSK6jskHTfpb5zwlo4aW1SwkKVxznD1+F4pv+nZF5IBacU3j794wpJTWOyRkcCL2wg6Mkyvu52lmlTvIKjZyanUEyCcVkAMo4pBLddy2QlKrgWbUmEKQD9OMNkjjjvL6EfODeyTuv4H0/tDfpdsorh2e5O6yk3PAm3zgZhKgSorEZZX48LHLjKy/4k6XZDSAu4OQz+BlbE0CovwOh+vKam2KarVLIRZhvZaZnPwtI6FQNYH3bZ5czYR9FMfejEy/tDBqtmH4hcWlFeEKFZJT58pZwd2Yt3ZfOTYMgDIfXt74qa7rG2h0+kyfZmtQadBf9pUy1pr8H1noeGp9UePqZ5/0ATeeqRpuqPNj9J6HQHVGXP1nPyrstHSKW2ttUsMm9UJJPuoubt3DgO05TzDpBt+pimu9lRTdKa+6p/MT+Ju0+Fpube2Q9dnrBiXbRTYjdHuouXAep5wOVfv1l5tV4RqHL7FTdlIZSQRmCNR3Q36Pbb9qRTqZP+E6B+zsbs4wNVZ2By7/nfLugqVSGm3J6stAxVMDvDMTF6K9IPaWpVT+8HutoHHAH+P1hejTnaaeMunq1A5U2O/4CR8RHXA1l1KnwMKDaMqDjNht/0HBTqDgvxkqU6nICbzUlnG4Irl/6FUv8M1cMTrGbBngZom0aZSb6MZkZTYyRFmlUQGcmlCjMioUZMFnG8RpIjUMdCM42vgRVoVKfF0YDvt1T52ni+JpFTmO7vBzHgQRPaGczzzpbs3ddmsd1jvKRwJ98edj4x5oVrUCddCptwsCORBFwfjJMMBvWLbq5AmwPfYSOoSNc/wBJTqMb90f0XxdmnjKiFmRSSmqsbXDcx2HQzLZbGx1nDMTOl0z4aHl2XhSE3S/hRy8tPESWovHlrfUHnKWHq7pz85r4hgyBhwFg3HTQ8xAOgk6CYtUZ1JF2KkdoF9POejYet1Rlz9Z4jgaxVgRwOXGx5HsI9Z6xsXHhqCENa4OV9DvG/wAbznvdLKVhzgqW9mYMdM9iezcV0HUqGz/wudD3MPiO2GeASX8Xgkq02pv7rix5jkR2g2M3F09BydniYjXIlzF4F6bvTf3kJU25jj3EZ+Mrk3H393nWcwkqXtwIN8tZ6D0Y6RiqBTqtaoNGOQcf/r1nnbU75gx0qEEX/t3GJUqkPNOT2pWku/Azox0nD7tKsetojnLe5K3b28YXMs5mnPTLpp9o7NWIuDK7TkNB9M3yWbTqRB50ph+jYSbsRWcqZ3abdMQvTvI9zslvcjbsOs2aU2SZW2sIHTdOozB5Hh8/ObzSlWpX4wOgqTzLa+yBlluk5E/hJHEW8IL4nClTZvA8CJ7FtHAqyHLMZ39bwU2zsIMAVzU6HiDxHdeNNvQ1KaPPzhyOF5IiW1mq2FZG3W4ffhFiMKARna/Pn4cO2WTbOdykUP2YHgSL6DWMjlGK36p8u+XqdlBPZ3iUsVbUePffONgpIptnw490Ldk1D7Jc+Lf6zBLDrdAe8Qj2PUPsV04/6jJUtZWKeHo2Gq2mjSxQmGz2jJiSDEl4M1pk9OcKPaJWW3XG438yDqnxXL/LBR6VobdIevh35pZx/l1/7SYCir98O6dEP6RzV/FnPs5wySylQHUWidY+A0rimeH94cdE+kZO7QrtnpTc8eSMefIwKY2F7Tj9oz0iVCpDxblnsryrUg50Z6ShrUarZ5BHPHkrHnyMJnWcVS5eM6ppNEK17SzSxIlR0kDgiLrQ3ymbSuDJQ0xKWKsc5fo17xpoVzhfBnLNFTnNaO30IivUecKsQkyrJrspuEL4a/Eg/DxHGYeLolBmOpe9xmAeNwcxCfdgh032oEQ0EPXcXYj8KH5tbyvKzOsSrw8621jGeszpe2ij+Ee7l26yN8bvplr+NTr3jnOnp3UsbWGVuPZ4zPZesDxJ+H3edCRFvezpqvxkbPe5vykppG5BvzEh3LHx+EIv6S4d7IR2n0m/slh7Jf8AN/qMHQNeQhHslP3S5jVv9ZiFPA8qI/5H/pb6SE03/I/9LfSKKRwYQRzkUexyPVbQ5EaQEqbPqo7J7Op1SRfcaxA0OnKKKX4iXL4jlqFQf8Op/Q/lpI29pwpVf6H+kUUuQOqQrXF6NT+h/pLP7K7Zeyqf0P8ASKKYyHGz3/5b/wBD/SE2w9t1qdkrU6rpkAwRi6fDrD48rxRSVSmuykU9DGiA6hkuVOhsfHIi48Zy+Fb8p8jFFOSpR0qmVK2Db8reRkVEuhzVrfyn6RRQfKH03cISRofIznFK3I+RiijNfxET7I6VJvynyMtLSPI+UUUMyjUzD6RbaNEblNHeqRkAjMifxOQM/wCXjxsJ53Uw1V2Z2SoWY7zEo5LEjMnLu8oop0xKw5qb0yquErFt32VSxP5HtxtwkGJwlQMCKVTLhuP3H8MUUzGRbweCdlbepVAVvbqPoRflzldMA4uDSq5adR+OnDsiigCU0wVUG/sql/5H+kLtlUG9ku9h6l872Dj8R4WyiigGP//Z',
                                    isMe: true,
                                },
                                lastMessage: {
                                    text: "Мир мир qмир мир",
                                    isReaded: false,
                                    created_at: new Date()
                                }
                            },
                            {
                                user: {
                                    fullname: 'Фёдрол Максим',
                                    avator: '',
                                    isMe: true,
                                },
                                lastMessage: {
                                    text: "Мир мир qмир мир",
                                    isReaded: false,
                                    created_at: new Date()
                                }
                            },
                        ]}


                    />
                </div>




            </div>


            {
                isOpen ?


                    <div className={styles.chat__dialog}>

                        <div className={styles.chat__dialog_header}>

                            <div className={styles.chat__dialog_header_conteiner} >
                                <img src={UserPhoto} alt='' />
                            </div>
                            <div className={styles.chat__dialog_header_Online}>
                                <b className={styles.chat__dialog_header_Online_name} >Иван Петоров</b>
                                <Status online={true} />
                            </div>
                            {
                                isOpen ? <p className={styles.chat__dialog_LogoOut} onClick={CloseChat} ></p> : ''

                            }


                        </div>

                        <div className={styles.chat__dialog_message}>


                            <Message
                                avator={UserPhoto}
                                text='Hello World' />
                            <Message
                                avator={people}
                                text='Hello World'
                                // date = new Date()
                                isMe={true}
                                isReaded={false} />


                            <Message
                                avator={UserPhoto}
                                text='Hello World'
                            />

                            <Message
                                avator={people}
                                text='Hello World'
                                isMe={true}
                                isReaded={false} />

                            <Message
                                avator={UserPhoto}
                                text='Hello World' />

                            <Message
                                avator={people}
                                text='Hello World'
                                isMe={true}
                                isReaded={false} />

                            <Message
                                avator={UserPhoto}
                                text='Hello World' />

                            <Message
                                avator={people}
                                text='Hello World'
                                isMe={true}
                                isReaded={false} />

                            <Message
                                avator={UserPhoto}
                                text='Hello World' />

                            <Message
                                avator={UserPhoto}
                                text='Hello World' />

                            <Message
                                avator={UserPhoto}
                                text='Hello World Hello  World Hello World Hello WorldHello World Hello World  World Hello World  World Hello World  ' />

                            <Message

                                // date="Sun Apr 21 2019 21:55:29"
                                audio={song}
                                user={{

                                    fullname: "Федор Достоевский",
                                    isOnline: false,
                                    avator: { UserPhoto }
                                }}
                            />






                        </div>
                        <div className={styles.chat__dialog_input}>
                            <ChatInput />
                        </div>
                    </div> :
                    <div className={styles.chat__Notdialog} >
                        <img alt='' className={styles.chat__Notdialog_img} src={'https://img.freepik.com/free-vector/flat-woman-at-home-office-with-laptop-conducting-video-meeting-team-building-with-colleagues-girl-chatting-and-talking-with-friends-online-vector-illustration-for-videoconference-or-remote-work_88138-551.jpg'} />
                        <p className={styles.chat__Notdialog_text}>Выберите диалог</p>
                    </div>

            }






            {/* <Dialogs

                items={[
                    {
                        user: {
                            fullname: 'Фёдрол Максим',
                            avator: 'https://cutt.ly/4KMAYeh'
                        },
                        lastMessage: {
                            text: "Мир мир qмир мир",
                            isReaded: false,
                            created_at: new Date()
                        }
                    },

                    {
                        user: {
                            fullname: 'Илон Маск',
                            avator: 'data:image/jpeg;base64,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'
                        },
                        lastMessage: {
                            text: "Tesla00",
                            isReaded: false,
                            created_at: new Date()
                        }
                    }
                ]}
            /> */}

            {/* <DialogItem user={{
                    fullname: "Федор Достоевский",
                    isOnline: true
                }}
                    unreaded={0}


                />

                <DialogItem user={{
                    fullname: "Федор Достоевский",
                    isOnline: true
                }}
                    unreaded={7}


                />
                <DialogItem user={{
                    fullname: "Федор Достоевский",
                    isOnline: false
                }}
                    unreaded={0}
                    online

                /> */}
            {/* </div> */}

            {/* <Message

                // date="Sun Apr 21 2019 21:55:29"
                audio={song}
                user={{

                    fullname: "Федор Достоевский",
                    isOnline: false,
                    avator: { UserPhoto }
                }}
            /> */}


            {/* <Message
                avator={UserPhoto}
                text='Hello World'
                date='02'
                isMe={true}
                isReaded={false} />

            <Message avator={UserPhoto} isTyping />

            <Message
                avator={UserPhoto}
                attachments={[
                    {
                        filename: 'image.jpg',
                        url: 'https://st.depositphotos.com/1005145/2341/i/600/depositphotos_23418410-stock-photo-pink-flowers-in-the-mountains.jpg'
                    }
                ]}
            /> */}





        </div >




    )
}


export default Chat