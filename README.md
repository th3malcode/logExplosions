# logExplosions

This is a behavour pack for minecraft bedrock.
Testing done on an ubuntu installed version of minecraft bedrock.

Console will show this if configured correctly.
```
[2025-05-07 17:00:23] [2025-05-07 17:00:23:892 INFO] [SERVER] Pack Stack - [01][logExplosions] [packid_ver][6f3a4325-4ce5-42f5-b141-12641c8823c3_1.0.0] [path][development_behavior_packs/logExplosions]
```

Events that are being monitored are listed in typeId.js file.
As events happen console log will output.
```
oak.2025.05.02.18.10.34.log:[2025-05-02 20:34:36] [2025-05-02 20:34:36:666 INFO] [Scripting] block DadOak minecraft:overworld minecraft:bed at -417, 65, 41
oak.2025.05.02.18.10.34.log:[2025-05-02 20:37:33] [2025-05-02 20:37:33:277 INFO] [Scripting] Leave DadOak minecraft:overworld at -402, 58, 31
oak.2025.05.02.18.10.34.log:[2025-05-02 20:41:07] [2025-05-02 20:41:07:730 INFO] [Scripting] block DadOak minecraft:overworld minecraft:chest at -396, 64, 57
oak.2025.05.02.18.10.34.log:[2025-05-02 20:42:52] [2025-05-02 20:42:52:490 INFO] [Scripting] Leave DadOak minecraft:overworld at -424, 65, 42
oak.2025.05.02.18.10.34.log:[2025-05-02 20:48:04] [2025-05-02 20:48:04:973 INFO] [Scripting] block DadOak minecraft:overworld minecraft:bed at -419, 65, 41
oak.2025.05.02.18.10.34.log:[2025-05-02 20:50:33] [2025-05-02 20:50:33:121 INFO] [Scripting] block DadOak minecraft:overworld minecraft:chest at -404, 65, 55
oak.2025.05.02.18.10.34.log:[2025-05-02 20:50:34] [2025-05-02 20:50:34:522 INFO] [Scripting] block DadOak minecraft:overworld minecraft:chest at -404, 65, 58
oak.2025.05.02.18.10.34.log:[2025-05-02 20:50:38] [2025-05-02 20:50:38:820 INFO] [Scripting] block DadOak minecraft:overworld minecraft:chest at -396, 64, 56
oak.2025.05.02.18.10.34.log:[2025-05-02 20:50:44] [2025-05-02 20:50:44:221 INFO] [Scripting] block DadOak minecraft:overworld minecraft:chest at -404, 65, 57
oak.2025.05.02.18.10.34.log:[2025-05-02 20:50:47] [2025-05-02 20:50:47:969 INFO] [Scripting] block DadOak minecraft:overworld minecraft:chest at -396, 64, 56
oak.2025.05.02.18.10.34.log:[2025-05-02 20:50:50] [2025-05-02 20:50:50:523 INFO] [Scripting] block DadOak minecraft:overworld minecraft:chest at -404, 65, 58
oak.2025.05.02.18.10.34.log:[2025-05-02 20:50:53] [2025-05-02 20:50:53:523 INFO] [Scripting] block DadOak minecraft:overworld minecraft:chest at -404, 65, 56
oak.2025.05.02.18.10.34.log:[2025-05-02 20:51:02] [2025-05-02 20:51:02:966 INFO] [Scripting] block DadOak minecraft:overworld minecraft:chest at -396, 64, 57
oak.2025.05.02.18.10.34.log:[2025-05-02 20:51:20] [2025-05-02 20:51:20:671 INFO] [Scripting] block DadOak minecraft:overworld minecraft:chest at -404, 65, 56
oak.2025.05.02.18.10.34.log:[2025-05-02 20:51:27] [2025-05-02 20:51:27:670 INFO] [Scripting] block DadOak minecraft:overworld minecraft:chest at -396, 64, 57
oak.2025.05.02.18.10.34.log:[2025-05-02 20:51:35] [2025-05-02 20:51:35:523 INFO] [Scripting] block DadOak minecraft:overworld minecraft:chest at -404, 65, 56
oak.2025.05.02.18.10.34.log:[2025-05-02 20:53:41] [2025-05-02 20:53:41:724 INFO] [Scripting] block DadOak minecraft:overworld minecraft:chest at -407, 65, 48
oak.2025.05.02.18.10.34.log:[2025-05-02 20:53:44] [2025-05-02 20:53:44:122 INFO] [Scripting] block DadOak minecraft:overworld minecraft:chest at -409, 65, 48
oak.2025.05.02.18.10.34.log:[2025-05-02 20:53:46] [2025-05-02 20:53:46:168 INFO] [Scripting] block DadOak minecraft:overworld minecraft:chest at -412, 65, 48
oak.2025.05.02.18.10.34.log:[2025-05-02 20:53:47] [2025-05-02 20:53:47:470 INFO] [Scripting] block DadOak minecraft:overworld minecraft:chest at -416, 65, 48
oak.2025.05.02.18.10.34.log:[2025-05-02 20:55:24] [2025-05-02 20:55:24:420 INFO] [Scripting] block DadOak minecraft:overworld minecraft:chest at -384, 65, 638
oak.2025.05.02.18.10.34.log:[2025-05-02 20:55:32] [2025-05-02 20:55:32:501 INFO] [Scripting] block DadOak minecraft:overworld minecraft:chest at -384, 65, 638
oak.2025.05.02.18.10.34.log:[2025-05-02 20:58:17] [2025-05-02 20:58:17:727 INFO] [Scripting] Leave DadOak minecraft:overworld at -419, 65, 41
oak.2025.05.03.18.10.34.log:[2025-05-03 18:25:19] [2025-05-03 18:25:19:202 INFO] [Scripting] block DadOak minecraft:overworld minecraft:bed at -418, 65, 41
oak.2025.05.03.18.10.34.log:[2025-05-03 18:28:51] [2025-05-03 18:28:51:517 INFO] [Scripting] block DadOak minecraft:overworld minecraft:chest at -396, 64, 57
oak.2025.05.03.18.10.34.log:[2025-05-03 18:29:36] [2025-05-03 18:29:36:611 INFO] [Scripting] Leave DadOak minecraft:overworld at -424, 65, 42
```

You can then search through the log after an event has happened.  


## bs_root
All the files in bs_root need to be placed into the folder with your bedrock_server executable (and server.properties).


## bs_root_modify
Same as above but merge this files instead of replacing them. Just incase you have other addons or other module permissions.


