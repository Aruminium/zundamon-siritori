from typing import List, Tuple
import random
import re
from enum import Enum, unique

@unique
class FlagType(Enum):
    USER_WIN = 1
    USER_LOSE = 2
    CONTINUE = 3

class Siritori:
    def __init__(self, txt_file: str):
        self.siritori_list = []
        # ゲームで使われた単語を入れるリスト
        self.game_siritori_list = []
        self.old_noun = "しりとり"
        self.hiragana_you_on_dict = {"ぁ": "あ","ぃ": "い","ぅ": "う", "ぇ": "え", "ぉ": "お", "っ": "つ", "ゃ": "や", "ゅ": "ゆ", "ょ": "よ", "ゎ": "わ", "ゕ": "か", "ゖ": "け" }
        with open(txt_file, "r", encoding='UTF-8') as lines:
            # 1行ずつ読み取る
            for line in lines:
                self.siritori_list.append(line.replace("\n",""))
        print("しりとり")
    def __return_nextnoun_list(self, text: str) -> List[str] or FlagType:
        '''
        入力されたテキストの最後の文字から始まる名詞のリストを返す

        Args:
            text (str): テキスト

        Returns:
            List[str]: 入力されたテキストの最後の文字から始まる名詞のリスト
        '''
        pattern=re.compile(r'^'+text[-1])
        str_match = [s for s in self.siritori_list if re.match(pattern, s)]
        if not str_match:
            return FlagType.USER_WIN.value
        return str_match
    def return_nextnoun(self, noun: str) -> Tuple[str, FlagType]:
        '''
        次の語句を返す

        Args:
            noun (str): プレイヤーが入力した語句

        Returns:
            Tuple[str, bool]: str: 次の語句 or 終了メッセージ, FlagType: 終了か続行
        '''
        # 返答できているか確認する
        #同じ単語を使っていないかを確かめる
        if noun in self.game_siritori_list:
            return f"{noun}は、すでに使われているのだ。あなたの負け", FlagType.USER_LOSE.value
        # 今回は語尾に「ー」がある場合はその１つ前の文字を参照する
        # ※語尾に小文字があるかどうかは確認していない
        if noun[-1] == "ー":
            # 「ー」を抜いた変数に置き換える
            # 例 ルビー → ルビ
            noun = noun[0:-1]
        # ユーザが前の単語の語尾から始まる単語を入力したか確認する
        if not self.old_noun[-1] == noun[0]:
            return self.old_noun[-1]+"から始まっていません\n"+"あなたの負け", FlagType.USER_LOSE.value
        # プレイヤーの返答が"ん"で終わっているかを確認する
        if self.__is_finish_nn(noun):
            return "んで終わっています\nあなたの負け", FlagType.USER_LOSE.value
        self.game_siritori_list.append(noun)

        # ここからはCPU側の処理
        first_character_list = self.__return_nextnoun_list(noun)
        # 返す語句があるかどうかを確認する
        if first_character_list is None:
            return "返す語句がありません。\nあなたの勝ち", FlagType.USER_WIN.value

        # listをシャッフルする
        random.shuffle(first_character_list)
        # listの先頭を返し、その要素を削除する.また、その要素が"ん"で終わっているかを確認する
        # この時点ではsiritori_listの方は消えてない
        next_noun = first_character_list.pop()
        # siritori_listの方からも消す
        self.siritori_list.remove(next_noun)

        if next_noun[-1] == "ー":
        # 「ー」を抜いた変数に置き換える
        # 例 ルビー → ルビ
            next_noun = next_noun[0:-1]
        # 拗音が入っている場合 大文字に変換する
        if next_noun[-1] in self.hiragana_you_on_dict.keys():
            next_noun[-1] = self.hiragana_you_on_dict.get(next_noun[-1])
        #同じ単語を使っていないかを確かめる
        if next_noun in self.game_siritori_list:
            return f"返せる言葉がないのだ\nあなたの勝ち", FlagType.USER_WIN.value
        self.old_noun = next_noun
        if self.__is_finish_nn(next_noun):
            return next_noun+"\n"+"「ん」がついたのであなたの勝ち", FlagType.USER_WIN.value
        return next_noun, FlagType.CONTINUE.value
    def __is_finish_nn(self, noun: str) -> bool:
        if noun[-1] == "ん":
            return True
