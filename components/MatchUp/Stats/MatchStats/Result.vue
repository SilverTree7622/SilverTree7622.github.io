<template>
    <div class="div-stats-result">
        <div class="div-2">
            <div class="div-3">Ball Possession</div>
            <div class="div-4">
                <div class="div-5">
                    <div class="div-6">48%</div>
                    <div class="div-7"></div>
                </div>
                <div class="div-8">
                    <div class="div-9"></div>
                    <div class="div-10">48%</div>
                </div>
            </div>
        </div>
        <div class="div-11">
            <div class="div-12">Total Shots</div>
            <div class="div-13">
                <div class="div-14">
                    <div class="div-15">11</div>
                    <div class="div-16"></div>
                </div>
                <div class="div-17">
                    <div class="div-18"></div>
                    <div class="div-19">11</div>
                </div>
            </div>
            <div class="div-20">
                <span style="color: rgba(98, 98, 98, 1)">Shots off target</span> / Shots
                on target
            </div>
            <div class="div-21">
                <div class="div-22">
                    <div class="div-23">4</div>
                    <img loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/781244303c49318531061bb0c79e434c7987c74e67303c1fd06a99bfaa9ab043?apiKey=7e72a9b2de7d48389d4a3a9bf07e0cfa&"
                        class="img" />
                </div>
                <div class="div-24">
                    <div class="div-25">4</div>
                    <img loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9a1153092dba4509d747f70052a272e1c5163ab31b3e6c2d31dd50131202afe?apiKey=7e72a9b2de7d48389d4a3a9bf07e0cfa&"
                        class="img" />
                </div>
            </div>
        </div>
        <div class="div-26">
            <div class="div-27">Blocked Shots</div>
            <div class="div-28">
                <div class="div-29">
                    <div class="div-30">5</div>
                    <div class="div-31"></div>
                </div>
                <div class="div-32">
                    <div class="div-33"></div>
                    <div class="div-34">11</div>
                </div>
            </div>
        </div>
        <div class="div-35">
            <div class="div-36">Corner Kicks</div>
            <div class="div-37">
                <div class="div-38">
                    <div class="div-39">5</div>
                    <div class="div-40"></div>
                </div>
                <div class="div-41">
                    <div class="div-42"></div>
                    <div class="div-43">11</div>
                </div>
            </div>
        </div>
        <div class="div-44">
            <div class="div-45">Offsides</div>
            <div class="div-46">
                <div class="div-47">
                    <div class="div-48">5</div>
                    <div class="div-49"></div>
                </div>
                <div class="div-50">
                    <div class="div-51"></div>
                    <div class="div-52">11</div>
                </div>
            </div>
        </div>
        <div class="div-53">
            <div class="div-54">Yellow Cards</div>
            <div class="div-55">
                <div class="div-56">
                    <div class="div-57">5</div>
                    <div class="div-58"></div>
                </div>
                <div class="div-59">
                    <div class="div-60"></div>
                    <div class="div-61">11</div>
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped>
.div-stats-result {
    align-self: stretch;
    display: flex;
    /* max-width: 348px; */
    width: 100%;
    flex-direction: column;
    color: #000;
}

.div-2 {
    border-radius: 6px;
    border: 0px solid #626262;
    background-color: #ebecf0;
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 10px 4px;
}

.div-3 {
    text-align: center;
    width: 100%;
    font: 400 13px Pretendard, sans-serif;
}

.div-4 {
    justify-content: end;
    display: flex;
    margin-top: 4px;
    gap: 6px;
    font-size: 12px;
    font-weight: 600;
    white-space: nowrap;
    text-transform: uppercase;
    padding: 0 10px;
}

.div-5 {
    justify-content: end;
    display: flex;
    gap: 10px;
    flex: 1;
    padding: 0 2px;
}

.div-6 {
    font-family: Pretendard, sans-serif;
    margin: auto 0;
}

.div-7 {
    border-radius: 3px;
    background-color: #f50;
    width: 120px;
    height: 20px;
}

.div-8 {
    display: flex;
    gap: 10px;
    flex: 1;
}

.div-9 {
    border-radius: 3px;
    background-color: #001a32;
    width: 120px;
    height: 20px;
}

.div-10 {
    font-family: Pretendard, sans-serif;
    margin: auto 0;
}

.div-11 {
    justify-content: center;
    border-radius: 6px;
    border: 0px solid #626262;
    background-color: #f8f8f8;
    display: flex;
    width: 100%;
    flex-direction: column;
    font-size: 13px;
    font-weight: 400;
    padding: 10px 4px;
}

.div-12 {
    text-align: center;
    font-family: Pretendard, sans-serif;
    width: 100%;
}

.div-13 {
    justify-content: end;
    display: flex;
    margin-top: 4px;
    gap: 6px;
    font-size: 12px;
    font-weight: 600;
    white-space: nowrap;
    text-transform: uppercase;
    padding: 0 10px;
}

.div-14 {
    justify-content: end;
    display: flex;
    gap: 10px;
    flex: 1;
    padding: 0 2px;
}

.div-15 {
    font-family: Pretendard, sans-serif;
    margin: auto 0;
}

.div-16 {
    border-radius: 3px;
    background-color: #f50;
    width: 135px;
    height: 20px;
}

.div-17 {
    display: flex;
    gap: 10px;
    flex: 1;
}

.div-18 {
    border-radius: 3px;
    background-color: #001a32;
    width: 135px;
    height: 20px;
}

.div-19 {
    font-family: Pretendard, sans-serif;
    margin: auto 0;
}

.div-20 {
    text-align: center;
    font-family: Pretendard, sans-serif;
    margin-top: 4px;
    width: 100%;
}

.div-21 {
    justify-content: center;
    display: flex;
    margin-top: 4px;
    gap: 6px;
    font-size: 16px;
    font-weight: 600;
    white-space: nowrap;
    text-transform: uppercase;
}

.div-22 {
    align-items: flex-end;
    border-radius: 3px;
    background-color: #f8e7de;
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 4px 20px;
}

.div-23 {
    font-family: Pretendard, sans-serif;
    justify-content: center;
    border-radius: 18px;
    background-color: #e0e4ea;
    align-self: end;
    margin-right: 23px;
    padding: 8px 12px;
}

.img {
    aspect-ratio: 1.85;
    object-fit: auto;
    object-position: center;
    width: 127px;
    align-self: center;
    margin-top: 10px;
}

.div-24 {
    align-items: center;
    border-radius: 3px;
    background-color: #d0d9e2;
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 4px 20px;
}

.div-25 {
    font-family: Pretendard, sans-serif;
    justify-content: center;
    border-radius: 18px;
    background-color: #e0e4ea;
    align-self: start;
    margin-left: 27px;
    padding: 8px 13px;
}

.div-26 {
    border-radius: 6px;
    border: 0px solid #626262;
    background-color: #ebecf0;
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 10px 4px;
}

.div-27 {
    text-align: center;
    width: 100%;
    font: 400 13px Pretendard, sans-serif;
}

.div-28 {
    justify-content: end;
    display: flex;
    margin-top: 4px;
    gap: 6px;
    font-size: 12px;
    font-weight: 600;
    white-space: nowrap;
    text-transform: uppercase;
    padding: 0 10px;
}

.div-29 {
    justify-content: end;
    display: flex;
    gap: 10px;
    text-align: right;
    flex: 1;
    padding: 0 1px;
}

.div-30 {
    font-family: Pretendard, sans-serif;
    flex: 1;
    margin: auto 0;
}

.div-31 {
    border-radius: 3px;
    background-color: #f50;
    width: 73px;
    height: 20px;
}

.div-32 {
    display: flex;
    gap: 10px;
    flex: 1;
}

.div-33 {
    border-radius: 3px;
    background-color: #001a32;
    width: 135px;
    height: 20px;
}

.div-34 {
    font-family: Pretendard, sans-serif;
    margin: auto 0;
}

.div-35 {
    border-radius: 6px;
    border: 0px solid #626262;
    background-color: #f8f8f8;
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 10px 4px;
}

.div-36 {
    text-align: center;
    width: 100%;
    font: 400 13px Pretendard, sans-serif;
}

.div-37 {
    justify-content: end;
    display: flex;
    margin-top: 4px;
    gap: 6px;
    font-size: 12px;
    font-weight: 600;
    white-space: nowrap;
    text-transform: uppercase;
    padding: 0 10px;
}

.div-38 {
    justify-content: end;
    display: flex;
    gap: 10px;
    text-align: right;
    flex: 1;
    padding: 0 1px;
}

.div-39 {
    font-family: Pretendard, sans-serif;
    flex: 1;
    margin: auto 0;
}

.div-40 {
    border-radius: 3px;
    background-color: #f50;
    width: 73px;
    height: 20px;
}

.div-41 {
    display: flex;
    gap: 10px;
    flex: 1;
}

.div-42 {
    border-radius: 3px;
    background-color: #001a32;
    width: 135px;
    height: 20px;
}

.div-43 {
    font-family: Pretendard, sans-serif;
    margin: auto 0;
}

.div-44 {
    border-radius: 6px;
    border: 0px solid #626262;
    background-color: #ebecf0;
    display: flex;
    width: 100%;
    flex-direction: column;
    white-space: nowrap;
    padding: 10px 4px;
}

.div-45 {
    text-align: center;
    width: 100%;
    font: 400 13px Pretendard, sans-serif;
}

.div-46 {
    justify-content: end;
    display: flex;
    margin-top: 4px;
    gap: 6px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
}

.div-47 {
    justify-content: end;
    display: flex;
    gap: 10px;
    text-align: right;
    flex: 1;
    padding: 0 1px;
}

.div-48 {
    font-family: Pretendard, sans-serif;
    flex: 1;
    margin: auto 0;
}

.div-49 {
    border-radius: 3px;
    background-color: #f50;
    width: 73px;
    height: 20px;
}

.div-50 {
    display: flex;
    gap: 10px;
    flex: 1;
}

.div-51 {
    border-radius: 3px;
    background-color: #001a32;
    width: 135px;
    height: 20px;
}

.div-52 {
    font-family: Pretendard, sans-serif;
    margin: auto 0;
}

.div-53 {
    border-radius: 6px;
    border: 0px solid #626262;
    background-color: #f8f8f8;
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 10px 4px;
}

.div-54 {
    text-align: center;
    width: 100%;
    font: 400 13px Pretendard, sans-serif;
}

.div-55 {
    justify-content: end;
    display: flex;
    margin-top: 4px;
    gap: 6px;
    font-size: 12px;
    font-weight: 600;
    white-space: nowrap;
    text-transform: uppercase;
    padding: 0 10px;
}

.div-56 {
    justify-content: end;
    display: flex;
    gap: 10px;
    text-align: right;
    flex: 1;
    padding: 0 1px;
}

.div-57 {
    font-family: Pretendard, sans-serif;
    flex: 1;
    margin: auto 0;
}

.div-58 {
    border-radius: 3px;
    background-color: #f50;
    width: 73px;
    height: 20px;
}

.div-59 {
    display: flex;
    gap: 10px;
    flex: 1;
}

.div-60 {
    border-radius: 3px;
    background-color: #001a32;
    width: 135px;
    height: 20px;
}

.div-61 {
    font-family: Pretendard, sans-serif;
    margin: auto 0;
}
</style>