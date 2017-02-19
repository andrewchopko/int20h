class ManageGroupController < ApplicationController

  def index
    vk = VkontakteApi::Client.new(session[:token])
    @user = vk.users.get(uid: session[:vk_id], fields: [:first_name, :last_name, :photo]).first

    ovva_response = HTTP.get program_link("ua")
    res = JSON.parse(ovva_response)
    @ress = res['data']['programs']

    session[:group_id] = 140083615
    @upload_server = vk.photos.getWallUploadServer(gid: session[:group_id])

  end

  private

  def program_link(lang)
    if lang=="ua"
      "https://api.ovva.tv/v2/ua/tvguide/1plus1"
    else
      "https://api.ovva.tv/v2/ru/tvguide/1plus1"
    end
  end
end
