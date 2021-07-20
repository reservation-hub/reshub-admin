# reshub-admin
reshubの管理画面リポジトリ


## reshub-adminの初期設定

aliasの設定と環境変数定義

```
$ source aliases.sh
$ admin-init
```

-------------------------------

### reshub-adminの実行コマンド

* admin画面のコンテナー起動

```
$ admin-up
```

* admin画面のコンテナー停止

```
$ admin-down
```

* 実行中のコンテナーのbashに接続

```
$ admin-bash
```

* ログの確認

```
$ admin-log
```

-------------------------------

ResHub-adminのURL及び起動ポートは
_http://localhost:8080_

-------------------------------
