# reshub-admin
Reshubの管理画面リポジトリ


-------------------------------

## reshub-adminの初期設定

aliasの実行と環境変数のアップデート

```
$ source aliases.sh
$ admin-init
$ ent-init
```

-------------------------------

### reshub-adminの実行コマンド

* admin画面のコンテナー起動

```
$ rh-ad
```

* admin画面のコンテナー停止

```
$ ad-down
```

* 実行中のコンテナーのbashに接続

```
$ ad-bash
```

* ログの確認

```
$ ad-log
```

-------------------------------

Reshub-adminのURL及び起動ポートは
_http://localhost:8080_

